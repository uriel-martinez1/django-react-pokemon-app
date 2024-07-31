import React from 'react';
import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'; //poke api endpoint
const API_BASE_URL = 'http://ec2-54-163-133-56.compute-1.amazonaws.com'; // ec2 server endpoint

export default class PokemonDetail extends React.Component {
    state = {
        pokemon: {},
        frontImg: "",
        backImg: "",
        pokemonDetail: {}, //this is for storing the data of the pokemon object to send to the back end
    }

    // this is where the lifecycle hook will be
    componentDidMount() {
        // we call the poke api to a specific pokemon
        const { id } = this.props; // we are getting the id number passed as a prop from the PokemonDetailWrapper.js
        this.fetchPokemonDetail(id);
    }

    // we need a method that uses axios get information of a particular pokemon based on pokemonId
    fetchPokemonDetail = (id) => {
        axios.get(`${baseUrl}/${id}`)
            .then((response) => {
                const pokemon = response.data; // place the data in a holding variable
                this.setState({ // we will now add the data to the items in the state
                    pokemon: pokemon,
                    frontImg: pokemon.sprites.front_default,
                    backImg: pokemon.sprites.back_default,
                    pokemonDetail: {   
                        api_id: pokemon.id,
                        name: pokemon.name,
                        base_experience: pokemon.base_experience,
                        height: pokemon.height,
                        weight: pokemon.weight,
                        front_url: pokemon.sprites.front_default,
                        back_url: pokemon.sprites.back_default
                    }
                });
            })
            .catch((error) => {
                console.error('Error fetching pokemon detail', error);
            });
    }

    // method to save Pokemon to the favorite list 
    saveToFavoriteList = () => {
        axios.post(`${API_BASE_URL}/api/pokemon/`, this.state.pokemonDetail)
        .then((response) => {
            alert('Pokemon was saved to favorites!')
        })
        .catch((error) => {
            alert('Unable to save to favorites!\n' + error.response.data.message);
        })
    }

    // template
    render() {
        const { pokemon, frontImg, backImg } = this.state;

        return (
            <div>
                <h1>{pokemon.name}</h1>
                <p>Height: {pokemon.height} Weight: {pokemon.weight}</p>
                <img src={frontImg} alt={`Front of ${pokemon.name}`} />
                <br/>
                <img src={backImg} alt={`Back of ${pokemon.name}`} />
                <br/>
                <button onClick={this.saveToFavoriteList}>Save to favorites</button>
            </div>
        );
    }
}
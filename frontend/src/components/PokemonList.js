import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// create a variable to hold the baseUrl
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

// we are essentially creating and declaring the pokemon component here
export default class PokemonList extends React.Component {
    state = {
        pokemonArray: [],
        count: 0,
    }

    // this is the lifecycle hook
    componentDidMount() {
        this.fetchPokemon();
    }

    // methods here
    fetchPokemon = () => {
        axios.get(`${baseUrl}/?offset=${this.state.count}&limit=20`)
            .then((response) => {
                const pokemonData = response.data.results.map((item) => {
                    let pokemonIndex = item.url.indexOf('pokemon');
                    let pokemonStr = item.url.substring(pokemonIndex);
                    let slashIndex = pokemonStr.indexOf('/');
                    let numberStr = pokemonStr.substring(slashIndex + 1, pokemonStr.length - 1);
                    item.id = +numberStr;
                    return item;
                });
                this.setState({ pokemonArray: pokemonData }); // this now assigns the pokemonArray with the response data

            })
            .catch((error) => {
                console.error('Error grab pokemon data', error);
            });
    }

    getNext = () => {
        this.setState((prevState) => ({ // setState is a method in React, prevState is a parameter of the setState method
            count: prevState.count + 20
        }), this.fetchPokemon); // the fetch pokemon method is called as callback after the state of count changes
    }

    getPrevious = () => {
        this.setState((prevState) => ({
            count: prevState.count - 20
        }), this.fetchPokemon); // the fetch pokemon method is called as callback after the state of count changes
    }

    // this is the template area of the component
    // just like in vue.js, everything in the template area must be wrapped in a single div container
    render() {
        return (
            <div className='pokemonList'>
                <h1>List of Pokemon</h1>
                <button onClick={this.getPrevious} disabled={this.state.count === 0}>Previous</button>
                <button onClick={this.getNext} disabled={this.state.count > 1302}>Next</button>
                <ul>
                    {
                        this.state.pokemonArray
                        .map(pokemon =>
                            <li key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
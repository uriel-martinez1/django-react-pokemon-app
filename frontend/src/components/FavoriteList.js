import React, {useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://ec2-54-163-133-56.compute-1.amazonaws.com'; // ec2 server endpoint

const FavoriteList = () => {
    const [favoriteArray, setFavoriteArray] = useState([]);

    useEffect(() => {
        fetchFavorite();
    }, []);

    const fetchFavorite = () => {
        axios.get(`${API_BASE_URL}/api/pokemon/`) // server endpoint
            .then((response) => {
                setFavoriteArray(response.data);
            })
            .catch((error) => {
                console.error('Error grabing favorite pokemon Data', error);
            });
    };
    // template section
    return (
        <div>
            <h1>Favorite Pokemon List</h1>
            <ul>
                {favoriteArray.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
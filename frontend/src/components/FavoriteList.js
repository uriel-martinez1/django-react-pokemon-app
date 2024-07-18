import React, {useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteList = () => {
    const [favoriteArray, setFavoriteArray] = useState([]);

    useEffect(() => {
        fetchFavorite();
    }, []);

    const fetchFavorite = () => {
        axios.get("/api/pokemon/") // server endpoint
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
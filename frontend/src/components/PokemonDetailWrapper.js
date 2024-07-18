import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonDetailClass from './PokemonDetail.js';

// this is our helper method that taking the id number found in the url
// then passing that id number as a prop to the Pokemon Detail component

const PokemonDetailWrapper = () => {
    const { id } = useParams();
    return <PokemonDetailClass id={id} />
};

export default PokemonDetailWrapper;
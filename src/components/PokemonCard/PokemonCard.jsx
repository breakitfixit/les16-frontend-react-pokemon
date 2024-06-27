import React, { useState, useEffect } from 'react'; // import de useState and useEffect hooks uit react

const PokemonCard = ({ name }) => { // een functioneel component PokemonCard dat een prop 'name' verwacht
    const [pokemon, setPokemon] = useState(null); // state aanmaken met useState hook, pokemon is null

    useEffect(() => { // useEffect hook, wordt uitgevoerd na de eerste render en na elke update
        // fetch data van de pokeapi en update de state met de data
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [name]); // de useEffect hook wordt alleen uitgevoerd als de prop 'name' verandert

    if (!pokemon) return <div>Loading...</div>; // als pokemon null is, return 'Loading...'

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
    );
};

export default PokemonCard;

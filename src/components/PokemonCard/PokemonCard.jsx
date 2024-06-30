import {useState, useEffect} from 'react'; // import de useState and useEffect hooks uit react
import './PokemonCard.css'; // import css file

const PokemonCard = ({name}) => { // een functioneel component PokemonCard dat een prop 'name' verwacht
    const [pokemon, setPokemon] = useState(null); // state aanmaken met useState hook, pokemon is null


    useEffect(() => { // useEffect hook, wordt uitgevoerd na de eerste render en na elke update
        // fetch data van de pokeapi en update de state met de data
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [name]); // useEffect hook uitgevoerd als de prop 'name' verandert

    if (!pokemon) return <div>Loading...</div>; // als pokemon null is, return 'Loading...'

    return (
        <div className='pokemon-selection'> {/* name, sprite, Moves (number), Abilities (array) */}
            <div className='pokemon-introduction'>
                <h4 className='pokemon-id'>#{pokemon.id}</h4>
                <h2>{pokemon.name}</h2>
                <img className='pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <div className='pokemon-stats'>
                <p>Moves: {pokemon.moves.length}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Abilities:
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}

                    {/*{pokemon.abilities.map(ability => ability.ability.name).join(',\n ')}*/}</p>
                {/*<p>Height: {pokemon.height}</p>*/}
                {/*<p>Weight: {pokemon.weight}</p>*/}
                {/*<p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>*/}
            </div>
        </div>
    );
};

export default PokemonCard;

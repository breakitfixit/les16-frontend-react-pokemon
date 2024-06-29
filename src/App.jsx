import PokemonCard from './components/PokemonCard/PokemonCard';

import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [previousPokemon, setPreviousPokemon] = useState(null);
    const [nextPokemon, setNextPokemon] = useState(null);

    const handlePreviousClick = () => {
        if (previousPokemon) {
            fetchPokemon(previousPokemon);
        }
    };

    const handleNextClick = () => {
        if (nextPokemon) {
            fetchPokemon(nextPokemon);
        }
    };

    const fetchPokemon = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
                setPreviousPokemon(data.previous);
                setNextPokemon(data.next);
            });
    }

    useEffect(() => {
        fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=20');
    }, []);


    // return (
    //     <section className='overall-container'>
    //         <h1>Gotta catch em all!</h1>
    //         <div className="pokeApp-main">
    //             <div className="pokemon-card">
    //                 <PokemonCard name="jigglypuff"/>
    //             </div>
    //             <div className="pokemon-card">
    //                 <PokemonCard name="pikachu"/>
    //             </div>
    //         </div>
    //     </section>
    // )
    return (
        <>
            <header className='header'><h1>Gotta catch em all!</h1></header>
            <section className='overall-container'>
                <button className='button previous' onClick={handlePreviousClick} disabled={!previousPokemon}>
                    Show Previous
                    <br/>
                    20 Pokemon
                </button>
                <div className="poke-main">
                    {pokemonList.map(pokemon => (
                        <div key={pokemon.name}>
                            <PokemonCard name={pokemon.name}/>
                        </div>

                    ))}
                </div>
                <button className='button next' onClick={handleNextClick} disabled={!nextPokemon}>
                    Show Next
                    <br/>
                    20 Pokemon
                </button>

            </section>
        </>
    );


}

export default App
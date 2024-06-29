import PokemonCard from './components/PokemonCard/PokemonCard';

import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

//     return (
//         <section className='overall-container'>
//             <h1>Gotta catch em all!</h1>
//             <div className="pokeApp-main">
//                 <div className="pokemon-card">
//                     <PokemonCard name="jigglypuff"/>
//                 </div>
//                 <div className="pokemon-card">
//                     <PokemonCard name="pikachu"/>
//                 </div>
//             </div>
//         </section>
//     )
    return (
        <section className='overall-container'>
            <h1>Gotta catch em all!</h1>
            <br/>
            <div className="pokeApp-main">
                {pokemonList.map(pokemon => (
                    <div className="pokemon-card" key={pokemon.name}>
                        <PokemonCard name={pokemon.name} />
                    </div>
                ))}
            </div>
        </section>
    );



}

export default App
import PokemonCard from './components/PokemonCard/PokemonCard';

import './App.css'

function App() {

    return (
        <div className="pokeApp-main">
            <h1>Gotta catch em all!</h1>
            <div className="pokemon-card">
                <h2>My first Pokémon Card</h2>
                <div className="pokemon-selected">
                    <PokemonCard name="jigglypuff"/>
                </div>
            </div>
        </div>
    )
}

export default App
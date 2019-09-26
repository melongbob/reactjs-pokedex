import React from 'react';
import './styles/PokemonCell.css';

const PokemonCell = ({pokemonClass}) => {
    const{ id, backgroundPosition } = pokemonClass;
    
    const style = {
        backgroundImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png', 
        backgroundPosition
    };
    
    return(
        <button style={style} className="pokemon-cell">
            <h1>{id}</h1>
        </button>
    )
}

export default PokemonCell;
import React from 'react';
import './styles/PokemonCell.css';
import sprites from '../assets/sprites.png'

const PokemonCell = ({pokemonClass, handleOnClick}) => {
    const{ id, backgroundPosition } = pokemonClass;
    
    const style = {
        backgroundImage: `url(${sprites})`, 
        backgroundPosition
    };
    
    return <button onClick={() => handleOnClick(id)} style={style} className="pokemon-cell"></button>
};

export default PokemonCell;
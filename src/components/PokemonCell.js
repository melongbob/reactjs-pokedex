import React from 'react';
import './styles/PokemonCell.css';
import sprites from '../assets/sprites.png'

console.log(sprites);

const PokemonCell = ({pokemonClass}) => {
    const{ id, backgroundPosition } = pokemonClass;
    
    const style = {
        backgroundImage: `url(${sprites})`, 
        backgroundPosition
    };
    
    return <button style={style} className="pokemon-cell"></button>
};

export default PokemonCell;
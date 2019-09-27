import React from 'react';
import axios from 'axios';
import PokemonCell from './PokemonCell';
import { pokemonClasses } from '../pokemonClasses'
import './styles/PokemonList.css';

const PokemonList = ({ handleOnClick }) => {
    const cells = pokemonClasses.map(pokemonClass => {
        return(
            <PokemonCell 
                key={ pokemonClass.id }
                pokemonClass={ pokemonClass }
                handleOnClick={handleOnClick} 
            />
        );
    });

    
    return(
        <section className="pokemon-list">
            {cells}
        </section>
    )
}

export default PokemonList;
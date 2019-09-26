import React from 'react';
import axios from 'axios';
import PokemonCell from './PokemonCell';
import { pokemonClasses } from '../pokemonClasses'
import './styles/PokemonList.css';

const cells = pokemonClasses.map(pokemonClass => 
    <PokemonCell 
        key={ pokemonClass.id }
        pokemonClass={ pokemonClass } />)

const PokemonList = () => {

    return(
        <section className="pokemon-list">
            {cells}
        </section>
    )
}

export default PokemonList;
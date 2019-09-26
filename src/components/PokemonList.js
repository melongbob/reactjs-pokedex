import React, { Component } from 'react';
import axios from 'axios';
import PokemonCell from './PokemonCell';
import './styles/PokemonList.css';

class PokemonList extends Component {
    state = {
        url:'https://pokeapi.co/api/v2/pokemon?offset=21&limit=21',
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }

    render(){
        return(
            <div>
            {this.state.pokemon ? (            
                <section className = "pokemon-list">
                    {this.state.pokemon.map(pokemon => <PokemonCell />)}
                </section>
                ) : 
                (
                    <h1>Loading Pokemons</h1>
                ) 
            }
            </div>

        )
    }
}

export default PokemonList;
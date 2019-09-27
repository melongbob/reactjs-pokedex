import React, { Component } from 'react';
import PokemonList from './PokemonList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    this.handleOnClick(1);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data=> {
        const pokemon = new Pokemon(data);
        this.setState({pokemon});
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App"> 
        <DetailView pokemon={this.state.pokemon} />
        <PokemonList handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default App;

// App.js
import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des Pokémon</h1>
      </header>
      <PokemonList />
    </div>
  );
}

export default App;

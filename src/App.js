import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import Alphabets from './components/Alphabets';
import './App.css';

function App() {
  const [path, setPath] = useState('/');

  return (
    <div className="App">
      <button
        onClick={() => {
          const pathName = 'PokemonList';
          setPath(`/${pathName}`);
          window.history.pushState({ page: pathName }, pathName, `/${pathName}`);
        }}
      >
        List
      </button>
      <button
        onClick={() => {
          const pathName = 'Alphabets';
          setPath(`/${pathName}`);
          window.history.pushState({ page: pathName }, pathName, `/${pathName}`);
        }}
      >
        Alphabets
      </button>
      
      <main>
        {path === "/PokemonList" && <PokemonList />}
        {path === "/Alphabets" && <Alphabets />}
      </main>
    </div>
  );
}

export default App;
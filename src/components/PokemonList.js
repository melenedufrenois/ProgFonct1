import React, { useEffect, useState } from 'react';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();
        
        // Récupérer les détails de chaque Pokémon
        const pokemons = await Promise.all(data.results.map(async (p, index) => {
          const detailsResponse = await fetch(p.url);
          const details = await detailsResponse.json();
          return {
            id: details.id,
            name: p.name,
            image: details.sprites.front_default, // URL de l'image
          };
        }));

        setPokemon(pokemons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemon();
  }, []);

  // Gérer le tri
  const sortedPokemon = [...pokemon].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Filtrer par nom
  const filteredPokemon = sortedPokemon.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pokémon List</h1>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Boutons de tri */}
      <div>
        <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
        <button onClick={() => setSortOrder('desc')}>Sort Descending</button>
      </div>

      {/* Afficher les Pokémon */}
      <ul>
        {filteredPokemon.map((p) => (
          <li key={p.id}>
            <img src={p.image} alt={p.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            {p.id}: {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

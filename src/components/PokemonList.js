import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0); // Offset pour savoir où commencer la requête
  const [previousAvailable, setPreviousAvailable] = useState(false); // Pour gérer le bouton précédent
  const [nextAvailable, setNextAvailable] = useState(true); // Pour gérer le bouton suivant
  const limit = 20;

  // Fonction pour charger les Pokémon en fonction de l'offset
  const fetchPokemon = (offset) => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setPreviousAvailable(offset > 0); // Si offset > 0, activer "Précédent"
        setNextAvailable(data.next !== null); // S'il y a des Pokémon après, activer "Suivant"
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du fetch des Pokémon :', error);
        setLoading(false);
      });
  };

  // Charger les Pokémon lors du premier rendu ou quand offset change
  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  // Fonction pour aller à la page suivante
  const handleNext = () => {
    setOffset(offset + limit);
  };

  // Fonction pour revenir à la page précédente
  const handlePrevious = () => {
    setOffset(Math.max(0, offset - limit));
  };

  if (loading) {
    return <p>Chargement des Pokémon...</p>;
  }

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      
      <div className="pagination-buttons">
        {/* Bouton Précédent */}
        <button onClick={handlePrevious} disabled={!previousAvailable}>
          Précédents
        </button>

        {/* Bouton Suivant */}
        <button onClick={handleNext} disabled={!nextAvailable}>
          Suivants
        </button>
      </div>
    </div>
  );
};

export default PokemonList;

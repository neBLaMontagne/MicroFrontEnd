import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../sharedComponent/src/components/headers/header';
import Footer from '../../sharedComponent/src/components/footers/footer';
import LandingPage from '../../sharedComponent/src/components/landingpages/LandingPage';
import './App.css'; // Importez le fichier de styles CSS

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => {
  const [pokemonDataList, setPokemonDataList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 5; i++) {
          promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        const responses = await Promise.all(promises);
        const pokemonData = responses.map(response => response.data);
        setPokemonDataList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '100px' }}>
      <Header />
      <div className="pokemon-container"> {/* Utilisez une classe pour le conteneur des Pokémon */}
        <h1>Basic Host-Remote</h1>
        <h2>Host</h2>
        {pokemonDataList.length === 0 ? (
          <p>Loading Pokemon data...</p>
        ) : (
          <div className="pokemon-list"> {/* Utilisez une classe pour la liste des Pokémon */}
            {pokemonDataList.map(pokemon => (
              <div key={pokemon.id} className="pokemon-item"> {/* Utilisez une classe pour chaque Pokémon */}
                <h3>Pokemon Name: {pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
            ))}
          </div>
        )}
        <React.Suspense fallback="Loading Button">
          <RemoteButton />
        </React.Suspense>
      </div>
      <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }} />
    </div>
  );
};

export default App;

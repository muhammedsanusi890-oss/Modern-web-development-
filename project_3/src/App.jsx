import { useMemo, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=24';

function App() {
  const [query, setQuery] = useState('');
  const [reloadKey, setReloadKey] = useState(0);
  const [forceError, setForceError] = useState(false);

  const requestUrl = forceError
    ? 'https://pokeapi.co/api/v2/this-route-does-not-exist'
    : POKE_API_URL;

  const { data, loading, error } = useFetch(requestUrl, [reloadKey]);

  const pokemonList = useMemo(() => {
    if (!data?.results) {
      return [];
    }

    return data.results.map((pokemon) => {
      const id = pokemon.url.split('/').filter(Boolean).pop();

      return {
        id,
        name: pokemon.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
    });
  }, [data]);

  const filteredPokemon = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return pokemonList;
    }

    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm),
    );
  }, [pokemonList, query]);

  const retryRequest = () => {
    setForceError(false);
    setReloadKey((previous) => previous + 1);
  };

  const triggerError = () => {
    setForceError(true);
    setReloadKey((previous) => previous + 1);
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Pokédex Explorer</p>
          <h1>Async React Demo</h1>
        </div>

        <div className="header-actions">
          <button type="button" className="secondary-button" onClick={retryRequest}>
            Retry
          </button>
          <button type="button" className="danger-button" onClick={triggerError}>
            Trigger error
          </button>
        </div>
      </header>

      <label className="search-bar" htmlFor="pokemon-search">
        <span>Search Pokémon</span>
        <input
          id="pokemon-search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type a Pokémon name..."
        />
      </label>

      <section className="content-panel">
        {loading && (
          <div className="loading-state" role="status" aria-live="polite">
            <div className="spinner" aria-hidden="true" />
            <p>Loading Pokémon...</p>
          </div>
        )}

        {!loading && error && (
          <div className="error-state" role="alert">
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button type="button" className="primary-button" onClick={retryRequest}>
              Try again
            </button>
          </div>
        )}

        {!loading && !error && filteredPokemon.length === 0 && (
          <div className="empty-state">
            <h2>No matching Pokémon</h2>
            <p>Try a different search term.</p>
          </div>
        )}

        {!loading && !error && filteredPokemon.length > 0 && (
          <div className="pokemon-grid">
            {filteredPokemon.map((pokemon) => (
              <article className="pokemon-card" key={pokemon.name}>
                <span className="pokemon-id">#{pokemon.id}</span>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

# Pokédex Explorer

A small React app that fetches and displays Pokémon data from the public PokéAPI. It demonstrates the three states pattern for async UI: loading, error, and data, while also including live search.

## API used

- Pokémon API: https://pokeapi.co/api/v2/

## How to run locally

1. Open a terminal in this project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal (typically http://localhost:5173).

## Live URL

- https://venerable-rabanadas-06e2fe.netlify.app/

## Error-state demo

The app includes a visible "Trigger error" button that intentionally requests a broken endpoint so the error state can be demonstrated and tested.

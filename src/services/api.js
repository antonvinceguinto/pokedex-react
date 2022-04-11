/**
 * @returns {Promise} returns 150 pokemons
 */
export const fetchPokemonList = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500',
  );
  if (!res.ok) return null;

  const pokemonList = await res.json();
  return pokemonList.results;
};

/**
 * @returns {Promise} returns pokemon details
 */
export const fetchPokemonDescription = async (pokemonId) => {
  if (pokemonId <= 0) return null;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`,
  );
  if (!res.ok) return null;

  const pokeDetails = await res.json();
  return pokeDetails.flavor_text_entries[0].flavor_text;
};

/**
 * @returns {string} returns pokemon details
 */
export const fetchPokemonImageURI = (pokemonId) => {
  if (pokemonId <= 0) return 'https://cdn.vox-cdn.com/thumbor/IhuPwFLVg19jF8B6rSmpy5T1-tY=/0x0:1920x1080/1400x788/filters:focal(807x387:1113x693):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53254027/who_pokemon.0.jpg';
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
};

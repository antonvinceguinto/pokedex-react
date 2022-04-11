import React, { useContext } from 'react';
import { PokemonContext } from '../../../services/pokemon_context_api';

function SelectDropdown() {
  const {
    updatePokemonSelection, pokemonList,
  } = useContext(PokemonContext);

  return (
    <div className='border p-2 flex items-center min-w-max rounded shadow-lg'>
      <select onChange={updatePokemonSelection} className='w-full uppercase'>
        <option value={0} className='uppercase'>
          -- Select a pokemon --
        </option>
        {pokemonList.map((p, idx) => (
          <option key={p.name} value={idx + 1} className='uppercase'>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDropdown;

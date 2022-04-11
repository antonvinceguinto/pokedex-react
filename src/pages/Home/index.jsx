import React, { useContext } from 'react';
import { fetchPokemonImageURI } from '../../services/api';
import { PokemonContext } from '../../services/pokemon_context_api';
import SelectDropdown from './components/SelectDropdown';

export default function Home() {
  const {
    pokemonList, currPokemonIndex, currPokemonDetails,
  } = useContext(PokemonContext);

  if (pokemonList.length <= 0) {
    return <div>loading</div>;
  }

  return (
    <div className='flex flex-col w-[20rem]'>
      <div>Choose a pokemon</div>
      <SelectDropdown />
      <div className='flex flex-col px-4 py-5 shadow-lg rounded-md mt-5'>
        <img
          src={fetchPokemonImageURI(currPokemonIndex)}
          alt={pokemonList[currPokemonIndex - 1]}
        />
        {currPokemonIndex <= 0 ? <div /> : (
          <div>
            <div className='mt-5 font-bold text-xl uppercase text-center'>
              {pokemonList[currPokemonIndex - 1]?.name}
            </div>
            <div className='mt-2 text-center'>
              {currPokemonDetails}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

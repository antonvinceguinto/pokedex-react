import React, {
  useEffect, useMemo, useState, createContext,
} from 'react';
import PropTypes from 'prop-types';
import { fetchPokemonList, fetchPokemonDescription } from './api';

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currPokemonIndex, setCurrPokemonIndex] = useState(0);
  const [currPokemonDetails, setCurrPokemonDetails] = useState('');

  const updatePokemonSelection = async (e) => {
    const selectedPokemonIndex = e.currentTarget.value;
    const details = await fetchPokemonDescription(selectedPokemonIndex);
    setCurrPokemonDetails(details);
    setCurrPokemonIndex(selectedPokemonIndex);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetchPokemonList();
      setPokemonList(res);
    };
    fetchPokemons();
  }, []);

  const value = useMemo(() => ({
    pokemonList, updatePokemonSelection, currPokemonIndex, currPokemonDetails,
  }), [pokemonList, updatePokemonSelection, currPokemonIndex, currPokemonDetails]);

  return (
    <PokemonContext.Provider
      value={value}
    >
      {children}
    </PokemonContext.Provider>
  );
}

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

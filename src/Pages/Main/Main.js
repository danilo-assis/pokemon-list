import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/modules/PokemonList';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const storePokemonList = useSelector((state) => state.PokemonList);
  const { pokemonPageList } = storePokemonList;

  useEffect(() => {
    dispatch(fetchPokemonList(currentPage));
  }, []);
  return (
    <>
      {pokemonPageList.map((pokemon) => (
        <div key={pokemon.id}>
          <div key={pokemon.id}>{pokemon.name}</div>

          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
          />
        </div>
      ))}
    </>
  );
}

export default Main;

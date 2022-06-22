import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/modules/PokemonList';

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const storePokemonList = useSelector((state) => state.PokemonList);
  const { pokemon_url } = storePokemonList;

  useEffect(() => {
    dispatch(fetchPokemonList(currentPage));
  }, []);
  return (
    <>
      {pokemon_url.map((pokemon) => (
        <div key={pokemon}>{pokemon}</div>
      ))}
    </>
  );
}

export default Main;

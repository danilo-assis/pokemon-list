import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../../redux/modules/PokemonList';

function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useDispatch();

  const storePokemonList = useSelector((state) => state.PokemonList);
  const { pokemonDetail } = storePokemonList;

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, []);

  return (
    <>
      <div key={pokemonDetail.id}>

        <div>{pokemonDetail.id}</div>

        <div>{pokemonDetail.name}</div>

        <div>{pokemonDetail.sprites}</div>

        <div>{pokemonDetail.weight}</div>

        <div>
          <p>
            <strong>Types:</strong>
          </p>
          {pokemonDetail.types?.map((type) => (
            <ul>
              <li>{type}</li>
            </ul>
          ))}
        </div>

        <div>
          <p>
            <strong>Abilities:</strong>
          </p>
          {pokemonDetail.abilities?.map((ability) => (
            <ul>
              <li>{ability}</li>
            </ul>
          ))}
        </div>

        <div>
          <p>
            <strong>Stats:</strong>
          </p>
          {pokemonDetail.stats?.map((stat) => (
            <ul>
              <li>{stat.name}</li>
              <li>{stat.base}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Detail;

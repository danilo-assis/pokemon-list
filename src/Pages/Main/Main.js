import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/modules/PokemonList';
import { Link } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import slogan from '../../Assets/img/gottaCatchThemAll.png';
function Main() {
  const dispatch = useDispatch();

  const storePokemonList = useSelector((state) => state.PokemonList);
  const { pokemonPageList, totalPages, currentPage } = storePokemonList;

  useEffect(() => {
    dispatch(fetchPokemonList(currentPage));
  }, []);

  const pages = [...Array(totalPages)];

  const pagination = () =>
    pages.map((_, i) => {
      return (
        <button key={i} onClick={() => dispatch(fetchPokemonList(i + 1))}>
          {i + 1}
        </button>
      );
    });

  return (
    <>
      <Slogan>
        <img src={slogan} alt="Pokemon slogan" />
      </Slogan>
      {pagination()}

      <CardsContainer>
        {pokemonPageList.map((pokemon) => (
          <StyledLink
            to={{
              pathname: '/detail',
              search: `?id=${pokemon.id}`,
            }}
            key={pokemon.id}
          >
            <PokemonCard name={pokemon.name} id={pokemon.id} />
          </StyledLink>
        ))}
      </CardsContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  margin-top: 80px;
`;

const CardsContainer = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Slogan = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 800px;

    @media screen and (max-width: 1000px) {
      width: 300px;
    }
  }
`;

export default Main;

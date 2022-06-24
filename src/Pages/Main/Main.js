import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/modules/PokemonList';
import { Link } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import slogan from '../../Assets/img/gottaCatchThemAll.png';

import Button from '@mui/material/Button';

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
        <Button key={i} onClick={() => dispatch(fetchPokemonList(i + 1))}>
          {i + 1}
        </Button>
      );
    });

  return (
    <>
      <Slogan>
        <img src={slogan} alt="Pokemon slogan" />
      </Slogan>

      <CenteredButtons>
        <StyledLink
          to={{
            pathname: '/favorite',
          }}
        >
          <Button variant="contained">Favorites</Button>
        </StyledLink>
      </CenteredButtons>

      <CenteredButtons>
        <p>Pages</p>
        <Pagination>{pagination()}</Pagination>
      </CenteredButtons>

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

      <CenteredButtons>
        <p>Pages</p>
        <Pagination>{pagination()}</Pagination>
      </CenteredButtons>
    </>
  );
}

const StyledLink = styled(Link)`
  margin-top: 80px;
`;

const CenteredButtons = styled.div`
  margin: 30px auto;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
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

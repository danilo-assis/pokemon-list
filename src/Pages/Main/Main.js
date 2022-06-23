import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../../redux/modules/PokemonList';
import { Link } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/PokemonCard';
import slogan from '../../Assets/img/gottaCatchThemAll.png';
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
      <Slogan>
        <img src={slogan} alt="Pokemon slogan" />
      </Slogan>
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
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Main;

import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../../redux/modules/PokemonList';
import { addPokemonIdToFavorite } from '../../redux/modules/FavoriteList';

import placeholderImage from '../../Assets/img/pokemonLogo.png';

function Detail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const dispatch = useDispatch();

  const storePokemonList = useSelector((state) => state.PokemonList);
  const { pokemonDetail } = storePokemonList;

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [id]);

  return (
    <DetailContainer key={pokemonDetail.id}>
      <PokemonHeader>
        <PokemonImgContainer>
          <PokemonImg
            src={pokemonDetail.sprites}
            alt={pokemonDetail.name}
            onError={(event) => {
              const { target } = event;
              target.onError = null;
              target.src = placeholderImage;
            }}
          />
        </PokemonImgContainer>

        <PokemonHeaderText>
          <PokemonDetailName>N°:{pokemonDetail.id}</PokemonDetailName>
          <PokemonDetailName>{pokemonDetail.name}</PokemonDetailName>
        </PokemonHeaderText>
        <button onClick={() => dispatch(addPokemonIdToFavorite(id))}>
          Add to favorite
        </button>
      </PokemonHeader>
      <PokemonInfo>
        <PhysicalDetailsContainer>
          <PhysicalDetails>
            <PhysicalDetailsItem>
              <DetailTitle>
                <p>
                  <strong>Weight</strong>
                </p>
              </DetailTitle>
              <p>{pokemonDetail.weight}kg</p>
            </PhysicalDetailsItem>
            <PhysicalDetailsItem>
              <DetailTitle>
                <p>
                  <strong>Height</strong>
                </p>
              </DetailTitle>
              <p>{pokemonDetail.height}m</p>
            </PhysicalDetailsItem>
          </PhysicalDetails>
        </PhysicalDetailsContainer>
        <DetailItem>
          <DetailTitle>
            <p>
              <strong>Types</strong>
            </p>
          </DetailTitle>
          <PokemonList>
            {pokemonDetail.types?.map((type) => (
              <ul>
                <li>{type}</li>
              </ul>
            ))}
          </PokemonList>
        </DetailItem>

        <DetailItem>
          <DetailTitle>
            <p>
              <strong>Abilities</strong>
            </p>
          </DetailTitle>
          <PokemonList>
            {pokemonDetail.abilities?.map((ability) => (
              <ul>
                <li>{ability}</li>
              </ul>
            ))}
          </PokemonList>
        </DetailItem>

        <DetailItem>
          <DetailTitle>
            <p>
              <strong>Base Stats</strong>
            </p>
          </DetailTitle>
          <PokemonList>
            {pokemonDetail.stats?.map((stat) => (
              <ul>
                <li>
                  <strong>{stat.name}</strong>
                </li>
                <li>{stat.base}</li>
              </ul>
            ))}
          </PokemonList>
        </DetailItem>
      </PokemonInfo>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PokemonHeader = styled.div`
  width: 30%;
  height: 640px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 3px solid #000;
  border-radius: 5px 0 0 5px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 400px;
  }
`;

const PokemonImgContainer = styled.div`
  padding: 4px;
  width: 100%;
  height: 400px;
  background-color: var(--primary-color);
  border-bottom: 0.5px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-top: 8px;
    width: 200px;
    height: 200px;
    border: 0.5px solid #000;
    border-radius: 100%;
  }
`;
const PokemonHeaderText = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const PokemonImg = styled.img`
  width: 380px;
  height: 380px;

  @media screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
  }
`;

const PokemonDetailName = styled.h1`
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
  font-size: 40px;
  font-family: 'Roboto';
  text-transform: capitalize;
`;

const PokemonInfo = styled.div`
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 3px solid #000;
  border-radius: 0 5px 5px 0;
  background-color: #4dd0e1;
`;

const DetailItem = styled.div`
  width: 100%;
`;

const DetailTitle = styled.div`
  margin: 0 auto;
  padding: 4px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const PokemonList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ul {
    list-style: none;
  }
`;

const PhysicalDetailsContainer = styled.div`
  width: 100%;
`;
const PhysicalDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhysicalDetailsItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 16px;
  }
`;

export default Detail;

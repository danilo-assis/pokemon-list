import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import placeholderImage from '../../Assets/img/pokemonLogo.png';

function Favorite() {
  const storeFavoriteList = useSelector((state) => state.FavoriteList);
  const { favoriteList } = storeFavoriteList;
  console.log('pokemonId', favoriteList);

  return (
    <>
      <LinkContainer>
        <Link
          to={{
            pathname: '/',
          }}
        >
          <Button variant="contained">Back to Home</Button>
        </Link>
      </LinkContainer>
      <CardsContainer>
        {favoriteList.length ? (
          favoriteList?.map((pokemon) => (
            <CardMedia
              component="img"
              sx={{
                margin: '8px',
                width: 200,
                height: 185,
                bgcolor: '#fff',
                border: '1px solid #000',
                borderRadius: 25,
              }}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`}
              alt="Pokemon image"
              onError={(event) => {
                const { target } = event;
                target.onError = null;
                target.src = placeholderImage;
              }}
            />
          ))
        ) : (
          <p>No Favorites yet.</p>
        )}
      </CardsContainer>
    </>
  );
}

const LinkContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  margin: 50px auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Favorite;

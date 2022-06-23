import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import CardMedia from '@mui/material/CardMedia';

import placeholderImage from '../../Assets/img/pokemonLogo.png';

function Favorite() {
  const storeFavoriteList = useSelector((state) => state.FavoriteList);
  const { favoriteList } = storeFavoriteList;
  console.log('pokemonId', favoriteList);

  return (
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
  );
}

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

import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import placeholderImage from '../../Assets/img/pokemonLogo.png';

export default function PokemonCard({ name, id }) {
  return (
    <StyledCard
      sx={{
        bgcolor: 'var(--primary-color)',
        borderRadius: 5,
        border: '3px solid #000',
      }}
    >
      <ClickToDetail>Click to more Datails</ClickToDetail>
      <Box>
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            sx={{
              textTransform: 'capitalize',
              fontSize: 20,
              fontFamily: 'Roboto',
              color: '#fff',
              letterSpacing: 1.5,
              fontWeight: 'bold',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{
          width: 200,
          height: 185,
          bgcolor: '#fff',
          border: '1px solid #000 ',
        }}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon image"
        onError={(event) => {
          const { target } = event;
          target.onError = null;
          target.src = placeholderImage;
        }}
      />
    </StyledCard>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const StyledCard = styled(Card)`
  margin: 0 40px;
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
`;

const ClickToDetail = styled.p`
  padding: 8px;
  width: 100%;
  color: #000;
  font-weight: bold;
  text-align: center;
  background-color: var(--secondary-color);
  border: 0.5px solid #000;
  /* border-radius: 5px; */
`;

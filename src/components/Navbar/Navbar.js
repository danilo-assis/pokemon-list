import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

import { Link } from 'react-router-dom';

import Logo from '../../Assets/img/pokemonLogo.png';

const handleSrollTopClick = (event) => {
  const anchor = (event.target.ownerDocument || document).querySelector(
    '#back-to-top-anchor',
  );

  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

function ScrollTop({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Zoom in={trigger}>
      <StyledBox
        onClick={handleSrollTopClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </StyledBox>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar(props) {
  return (
    <>
      <CssBaseline />

      <StyledAppBar>
        <a href="/">
          <LogoContainer>
            <LogoImg src={Logo} alt="Pokémon" />
          </LogoContainer>
        </a>
      </StyledAppBar>

      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="go to the top of the page">
          <StyledKeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

const StyledBox = styled(Box)`
  z-index: 9;

  & button {
    background-color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
    }
  }
`;

const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`
  color: var(--secondary-color);
`;

const StyledAppBar = styled(AppBar)`
  &.MuiPaper-root {
    background-color: var(--primary-color);
  }
`;

const LogoContainer = styled.div`
  margin: 0 auto;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 64px;
  width: 64px;
`;

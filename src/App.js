import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Container from '@mui/material/Container';

import Main from './Pages/Main/Main';
import Detail from './Pages/Detail/Detail';
import Favorite from './Pages/Favorite/Favorite';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <StyledContainer maxWidth="false" disableGutters="true">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
`;
export default App;

import react from 'react';
import { Box } from '@mui/material';
import Styled from 'styled-components';

const Layout = ({ children }) => {
  return <Background>{children}</Background>;
};

const Background = Styled(Box)`
  display: flex;
  flex-direction: column;
  // background-color: red;
  height: 100vh;
  // flex-grow: 1;
`;

export default Layout;

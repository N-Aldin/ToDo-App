import Styled from 'styled-components';
import { Button as btn } from '@mui/material';

export const Button = Styled(btn)`
  width: 90%;
  margin: 1rem auto !important; 
  background-color: green !important; 
`;

export const Drawer = Styled.div`
  display: flex;
  flex-direction: column; 
  background-color: white;
  width: auto;
  min-width: 16rem;
  height: 100%;
//   height: calc(100vh-100%);
//   overflow-y: scroll;
`;

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
  height: 100%;
  min-width: 16rem;
  width: 18rem;
  // border-right: 1px solid;
`;

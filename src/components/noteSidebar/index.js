import React from 'react';
// import { Button, Drawer } from './noteSidebar.styled';
import { Button as btn } from '@mui/material';
import NoteList from './noteList';
import Styled from 'styled-components';

const NoteSidebar = () => {
  return (
    <Drawer>
      <Button variant='contained'>Add Note</Button>

      <hr />
      <NoteList />
    </Drawer>
  );
};

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
  border-right: 1px solid;
`;

export default NoteSidebar;

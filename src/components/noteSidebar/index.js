import React from 'react';
import { Button, Drawer } from './noteSidebar.styled';
import NoteList from './noteList';
import Styled from 'styled-components';

const NoteSidebar = () => {
  return (
    <>
      <Container>
        <Drawer>
          <Button variant='contained'>Add Note</Button>
          <hr />
          <NoteList />
        </Drawer>
      </Container>
    </>
  );
};

const Container = Styled.div`
  display: flex;
  width: auto;
  background-color: red;
  height: 100%;
`;

export default NoteSidebar;

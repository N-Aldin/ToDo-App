import React from 'react';
import NoteSidebar from '../../components/noteSidebar';
import Note from '../../components/note';
import Styled from 'styled-components';

const Notes = () => {
  return (
    <Container>
      <NoteSidebar />
      <Note />
    </Container>
  );
};

const Container = Styled.div`
  display: flex;
  background-color: orange;
  // height: 100%;
  // max-height: ;
  // flex-grow: 1;
  height: calc(100vh - 4rem);
  max-height: calc(100vh - 4rem);
`;

export default Notes;

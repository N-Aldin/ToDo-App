import React from 'react';
import NoteSidebar from '../../components/noteSidebar';
import Note from '../../components/note';
import Styled from 'styled-components';
function Notes() {
  return (
    <>
      <Container>
        <NoteSidebar />
        <Note />
      </Container>
    </>
  );
}

const Container = Styled.div`
  display: flex;
  height: 100%;
`;

export default Notes;

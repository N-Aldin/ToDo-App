import React from 'react';
import Styled from 'styled-components';

const Note = () => {
  return (
    <Container>
      <NoteTitle placeholder='NoteTitle...'></NoteTitle>
      <NoteBody placeholder='Enter notes here...'></NoteBody>
    </Container>
  );
};

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // background-color: orange;
`;

const NoteTitle = Styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 4rem;
  font-weight: bold;
`;

const NoteBody = Styled.textarea`
  outline: none; 
  border: none; 
  width: 100%;
  flex-grow: 1;
  font-size: 1.5rem;
  resize: none;
`;

export default Note;

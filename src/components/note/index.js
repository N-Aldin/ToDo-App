import React, { useState, useContext, useEffect } from 'react';
import Styled from 'styled-components';
import { NotesContext } from '../../contexts/notesContext';

const Note = () => {
  const [title, setTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const notes = useContext(NotesContext);

  useEffect(() => {
    console.log(notes);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);

    clearTimeout(saveTitle);

    const saveTitle = setTimeout(() => {
      // Send request to save
    }, 750);
  };

  const handleNoteChange = (e) => {
    setNoteBody(e.target.value);
  };

  return (
    <Container>
      <NoteTitle
        placeholder='Note Title...'
        value={title}
        onChange={handleTitleChange}
      ></NoteTitle>
      <NoteBody
        placeholder='Enter Notes Here...'
        value={noteBody}
        onChange={handleNoteChange}
      ></NoteBody>
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
  overflow: visible;
  border: none;
  border-bottom: 2px solid whitesmoke;
  outline: none;
  // width: 100%;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0 1rem 1rem;
`;

const NoteBody = Styled.textarea`
  outline: none; 
  border: none; 
  // width: 100%;
  flex-grow: 1;
  font-size: 1.5rem;
  resize: none;
  padding-left: 2rem;
  padding-top: 1rem;
`;

export default Note;

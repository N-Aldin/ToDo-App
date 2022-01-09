import React, { useState, useContext, useEffect, useRef } from 'react';
import Styled from 'styled-components';
import { NotesContext } from '../../contexts/notesContext';

const Note = () => {
  const [note, setNote] = useState();
  const [notePos, setNotePos] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const titleSave = useRef();
  const bodySave = useRef();
  const autoSave = useRef();

  const { activeNote, notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    if (!activeNote) return;

    for (let i = 0; i < notes.length; ++i) {
      if (activeNote === notes[i].id) {
        setNote(notes[i]);
        setNotePos(i);
        break;
      }
    }

    // setTitle(notes[note].title);
    // setBody(notes[note].body);
  }, [activeNote]);

  useEffect(() => {
    if (!note && note !== 0) return;

    console.log('Note number: ' + note);
    setTitle(note.title);
    setBody(note.body);
  }, [note]);

  useEffect(() => {
    if (!activeNote) return;

    clearTimeout(autoSave.current);

    autoSave.current = setTimeout(() => {
      notes[notePos].title = title;
      notes[notePos].body = body;
      setNotes([...notes]);
    }, 1000);
  }, [title, body]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <Container>
      {activeNote ? (
        <>
          <NoteTitle
            placeholder='Note Title...'
            value={title}
            onChange={handleTitleChange}
          ></NoteTitle>
          <NoteBody
            placeholder='Enter Notes Here...'
            value={body}
            onChange={handleNoteChange}
          ></NoteBody>
        </>
      ) : (
        <></>
      )}
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

import React, { useState, useContext, useEffect, useRef } from 'react';
import { NotesContext } from '../../contexts/notesContext';
import { Container, NoteTitle, NoteBody } from './note.styled';

const Note = () => {
  const [note, setNote] = useState();
  const [notePos, setNotePos] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
      handleSave();
    }, 1000);

    return () => {
      notes[notePos].title = title;
      notes[notePos].body = body;
      setNotes([...notes]);
    };
  }, [title, body]);

  const handleSave = () => {
    notes[notePos].title = title;
    notes[notePos].body = body;
    setNotes([...notes]);
  };

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

export default Note;

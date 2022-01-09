import React, { useState, useContext, useEffect } from 'react';
import { NotesContext } from '../../contexts/notesContext';
import { Container, NoteTitle, NoteBody } from './note.styled';

const Note = () => {
  const [note, setNote] = useState();
  const [notePos, setNotePos] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
  }, [activeNote, notes]);

  useEffect(() => {
    if (!note) return;

    setTitle(note.title);
    setBody(note.body);
  }, [note]);

  useEffect(() => {
    handleSave();
  }, [title, body]);

  const handleSave = () => {
    if (!activeNote) return;
    if (title === note.title && body === note.body) return;

    notes[notePos].title = title;
    notes[notePos].body = body;
    notes[notePos].modified = getDate();
    setNotes([...notes]);
  };

  const getDate = () => {
    const date = new Date();
    let dateStr = '';

    dateStr += date.toDateString();
    dateStr +=
      ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    return dateStr;
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

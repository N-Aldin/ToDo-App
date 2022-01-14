import React, { useContext } from 'react';
import { Drawer, Button } from './noteSidebar.styled';
import NoteList from './noteList';
import { NotesContext } from '../../contexts/notesContext';
import { v4 as uuid } from 'uuid';

const NoteSidebar = () => {
  const getDate = () => {
    const date = new Date();
    let dateStr = '';

    dateStr += date.toDateString();
    dateStr +=
      ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    return dateStr;
  };

  const newNote = {
    id: uuid(),
    title: '',
    body: '',
    modified: getDate(),
  };

  const { notes, setNotes, setActiveNote, activeNote } =
    useContext(NotesContext);

  const handleAddNote = () => {
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    console.log(notes);
    console.log('Active Note: ' + JSON.stringify(activeNote));
    return;
  };

  return (
    <Drawer>
      <Button variant='contained' onClick={handleAddNote}>
        Add Note
      </Button>
      {/* <hr /> */}
      <NoteList />
    </Drawer>
  );
};

export default NoteSidebar;

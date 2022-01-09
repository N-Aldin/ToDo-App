import React, { useContext } from 'react';
// import { Button, Drawer } from './noteSidebar.styled';
import { Button as btn } from '@mui/material';
import NoteList from './noteList';
import Styled from 'styled-components';
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
    title: 'Title',
    body: '',
    modified: getDate(),
  };

  const { notes, setNotes, setActiveNote, activeNote } =
    useContext(NotesContext);

  const handleAddNote = () => {
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    console.log(notes);
    console.log('Active Note: ' + activeNote);
    return;
  };

  return (
    <Drawer>
      <Button variant='contained' onClick={handleAddNote}>
        Add Note
      </Button>
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

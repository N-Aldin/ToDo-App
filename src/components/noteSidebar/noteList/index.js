import React, { useEffect, useContext } from 'react';
import { List } from '@mui/material';
import NoteItem from './noteItem';
import Styled from 'styled-components';
import { NotesContext } from '../../../contexts/notesContext';

function NoteList() {
  const { notes } = useContext(NotesContext);

  return (
    <Notes>
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            modified={note.modified}
          />
        );
      })}
    </Notes>
  );
}

const Notes = Styled(List)`
  overflow-y: auto;
  overflow-x: hidden;
`;

export default NoteList;

import React, { useContext } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Styled from 'styled-components';
import { NotesContext } from '../../../../contexts/notesContext';

const NoteItem = ({ id, title, modified }) => {
  const { setActiveNote } = useContext(NotesContext);

  const handleClick = () => {
    setActiveNote(id);
    console.log(id);
  };

  return (
    <ListItem disablePadding>
      <NoteButton onClick={handleClick}>
        <ListItemText primary={title} secondary={modified} />
      </NoteButton>
    </ListItem>
  );
};

const NoteButton = Styled(ListItemButton)`
`;

export default NoteItem;

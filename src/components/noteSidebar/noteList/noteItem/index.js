import React, { useContext } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Styled from 'styled-components';
import { NotesContext } from '../../../../contexts/notesContext';

const NoteItem = ({ id, title, modified }) => {
  const { activeNote, setActiveNote } = useContext(NotesContext);

  const handleClick = () => {
    console.log(
      'This is the current active note: ' + JSON.stringify(activeNote)
    );
    setActiveNote(id);
    console.log(id);
  };

  return (
    <ListItem disablePadding>
      <NoteButton onClick={handleClick}>
        <ListItemText
          children={
            <Typography noWrap>{title ? title : 'Undefined'}</Typography>
          }
          secondary={modified}
        />
      </NoteButton>
    </ListItem>
  );
};

const NoteButton = Styled(ListItemButton)`
  max-width: 100%;
`;

export default NoteItem;

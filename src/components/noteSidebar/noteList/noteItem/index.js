import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const NoteItem = () => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary='Inbox' secondary='2022-01-07' />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default NoteItem;

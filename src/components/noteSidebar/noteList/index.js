import React from 'react';
import { List } from '@mui/material';
import NoteItem from './noteItem';

function NoteList() {
  return (
    <List
      sx={{
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
      }}
    >
      {/* All the notes will be displayed here */}
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
      <NoteItem title='Title' modified='2022-01-07' />
    </List>
  );
}

export default NoteList;

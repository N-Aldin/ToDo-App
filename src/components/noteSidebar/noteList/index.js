import React from 'react';
import { List } from '@mui/material';
import NoteItem from './noteItem';
import Styled from 'styled-components';

function NoteList() {
  return (
    <Notes>
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
    </Notes>
  );
}

const Notes = Styled(List)`
  overflow-y: auto;
  overflow-x: hidden;
`;

export default NoteList;

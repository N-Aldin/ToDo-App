import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const NoteTitle = Styled.input`
  overflow: visible;
  border: none;
  border-bottom: 2px solid whitesmoke;
  outline: none;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0 1rem 1rem;
`;

export const NoteBody = Styled.textarea`
  outline: none; 
  border: none; 
  flex-grow: 1;
  font-size: 1.5rem;
  resize: none;
  padding-left: 2rem;
  padding-top: 1rem;
`;

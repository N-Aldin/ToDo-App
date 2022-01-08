import React from 'react';
import Styled from 'styled-components';

const Note = () => {
  return (
    <Container>
      <p>Hello</p>
    </Container>
  );
};

const Container = Styled.div`
  height: 100%;
  width: 100%;
  // background-color: orange;
`;

export default Note;

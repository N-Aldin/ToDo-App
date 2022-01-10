import React from 'react';
import { CircularProgress } from '@mui/material';
import Styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

const Container = Styled.div`
  display: flex;
  justify-content: center;
`;

export default Loading;

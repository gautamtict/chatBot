import React from 'react';
import ChatWindow from './components/ChatWindow';
import { Container, Typography } from '@mui/material';

const App = () => (
  <Container maxWidth="sm">
    <Typography variant="h4" align="center" gutterBottom>
      Chatbot Query Interface
    </Typography>
    <ChatWindow />
  </Container>
);

export default App;

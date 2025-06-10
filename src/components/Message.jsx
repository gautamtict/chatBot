import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ sender, text }) => {
  const isUser = sender === 'user';
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Box
        sx={{
          bgcolor: isUser ? '#1976d2' : '#e0e0e0',
          color: isUser ? '#fff' : '#000',
          px: 2,
          py: 1,
          borderRadius: 2,
          maxWidth: '70%',
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;

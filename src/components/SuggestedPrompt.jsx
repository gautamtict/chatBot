import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const SuggestedPrompt = ({ onPromptClick }) => {
  const suggestions = [
    'What is React?',
    'How does useState work?',
    'Explain JavaScript closure',
    'Tell me a joke!',
    'Show me markdown example'
  ];

  return (
    <Box
      sx={{
        width: '150px',
        borderLeft: '1px solid #ddd',
        padding: 2,
        height: '10%',
        boxSizing: 'border-box',
        bgcolor: '#f9f9f9',
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        💡 Suggested Prompts
      </Typography>
      {suggestions.map((text, idx) => (
        <Button
          key={idx}
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 1, textTransform: 'none' }}
          onClick={() => onPromptClick(text)}
        >
          {text}
        </Button>
      ))}
    </Box>
  );
};

export default SuggestedPrompt;

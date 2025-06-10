import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import { TextField, Button, Box, Paper, Avatar, Typography } from '@mui/material';
import SuggestedPrompt from './SuggestedPrompt';

const ChatWindow = () => {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem('chatMessages');
    return stored ? JSON.parse(stored) : [];
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // const handleSend = () => {
  //   if (!input.trim()) return;

  //   const userMsg = { sender: 'user', text: input };
  //   const botMsg = { sender: 'bot', text: `AI Response for: "${input}"` };

  //   const newMessages = [...messages, userMsg, botMsg];
  //   setMessages(newMessages);
  //   setInput('');
  //   localStorage.setItem('chatMessages', JSON.stringify(newMessages));
  // };
  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMsg = { sender: 'user', text: input };
  
    // Add user's message + temporary Typing message
    const newMessages = [...messages, userMsg, { sender: 'bot', text: 'Typing...' }];
    setMessages(newMessages);
    setInput('');
  
    // Scroll immediately
    setTimeout(() => {
      scrollToBottom();
    }, 100);
  
    // Simulate bot delay
    setTimeout(() => {
      const botResponse = { sender: 'bot', text: `AI Response for: "${input}"` };
  
      // Replace the last "Typing..." message with actual response
      const updatedMessages = [...newMessages.slice(0, -1), botResponse];
      setMessages(updatedMessages);
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    }, 1200);
  };
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    {/* Left: Suggested Prompts */}
    <Box sx={{ width: 150, borderRight: '1px solid #ddd', bgcolor: '#f9f9f9' }}>
      <SuggestedPrompt onPromptClick={setInput} />
    </Box>
  
    {/* Right: Chat UI */}
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        borderRadius: 0,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          borderBottom: '1px solid #ccc',
        }}
      >
        <Avatar src="" alt="User" sx={{ mr: 2 }} />
        <Typography variant="h6">Gautam Thakur</Typography>
      </Box>
  
      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: 2,
        }}
      >
        {messages.map((msg, i) => (
          <Message key={i} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
  
      {/* Input Box */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          padding: 2,
          borderTop: '1px solid #ccc',
        }}
      >
        <TextField
          fullWidth
          label="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Paper>
  </Box>
  
   
  );
};

export default ChatWindow;

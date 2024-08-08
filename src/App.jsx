import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>
      <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1, paddingBottom: '20px' }}>
        <Typography variant="h3" gutterBottom>
          Task Manager
        </Typography>
        <TaskForm />
      </Box>
      <TaskList />
    </Container>
  );
};

export default App;

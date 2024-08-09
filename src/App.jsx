import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Container>
        <Typography><h1>Task Manager</h1></Typography>
      <Box sx={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <TaskForm />
        <TaskList />
      </Box>
    </Container>
  );
};

export default App;

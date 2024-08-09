import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, setCurrentTask } from '../redux/tasksSlice';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ minHeight: '150px', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2">
          {task.description}
        </Typography>
      </CardContent>
      <Box sx={{ marginTop: 'auto', padding: '16px' }}>
        <Button variant="contained" color="primary" onClick={() => dispatch(setCurrentTask(task))}>
          Update
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => dispatch(deleteTask(task.id))} sx={{ marginLeft: '8px' }}>
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;

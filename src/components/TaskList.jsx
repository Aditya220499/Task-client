import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { deleteTask, setSelectedTask } from '../features/taskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdate = (task) => {
    dispatch(setSelectedTask(task));
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 2,
        marginTop: 3,
        justifyContent: 'center',
      }}
    >
      {tasks.map((task) => (
        <Card key={task.id} sx={{ minWidth: 275, borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography variant="body2">
              {task.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
            <Button variant="contained" color="primary" onClick={() => handleUpdate(task)}>
              Update
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default TaskList;

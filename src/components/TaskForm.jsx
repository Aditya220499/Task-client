import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../redux/tasksSlice';
import { Button, TextField, Box } from '@mui/material';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const { currentTask } = useSelector((state) => state.tasks);

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
      setIsUpdating(true);
    }
  }, [currentTask]);

  const handleSubmit = () => {
    if (isUpdating) {
      dispatch(updateTask({ id: currentTask.id, title, description }));
      setIsUpdating(false);
    } else {
      dispatch(addTask({ title, description }));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} padding={5}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        {isUpdating ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;

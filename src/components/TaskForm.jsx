import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../features/taskSlice';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = () => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.tasks.selectedTask);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setIsUpdate(true);
    } else {
      setTitle('');
      setDescription('');
      setIsUpdate(false);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateTask({ id: selectedTask.id, title, description }));
    } else {
      dispatch(addTask({ title, description }));
    }
    setTitle('');
    setDescription('');
    setIsUpdate(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        {isUpdate ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;

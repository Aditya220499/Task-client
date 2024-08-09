import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import { Grid } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <TaskCard task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;

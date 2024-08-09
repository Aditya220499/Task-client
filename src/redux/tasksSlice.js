import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    currentTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), ...action.payload });
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex((task) => task.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
      }
      state.currentTask = null;
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask, setCurrentTask } = tasksSlice.actions;

export default tasksSlice.reducer;

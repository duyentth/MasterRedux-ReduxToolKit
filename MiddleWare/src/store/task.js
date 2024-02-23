import { createSlice } from "@reduxjs/toolkit";

//create slice
let id = 0;
const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    //action:function
    addTask: (state, action) => {
      state.push({ id: ++id, task: action.payload.task, completed: false });
    },
    removeTask(state, action) {
      const index = state.findIndex((t) => t.id === action.payload.id);
      state.splice(index, 1);
    },
    completeTask(state, action) {
      const index = state.findIndex((t) => t.id === action.payload.id);
      state[index].completed = true;
    },
  },
});
export const { addTask, removeTask, completeTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;

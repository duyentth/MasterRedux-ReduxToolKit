import {
  createAction,
  createReducer,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

// //create actions
// export const addTask = createAction("ADD_TASK");
// export const removeTask = createAction("REMOVE_TASK");
// export const completeTask = createAction("COMPLETE_TASK");

// //create reducer
// let id = 0;
// const taskReducer = createReducer([], (builder) => {
//   builder
//     .addCase("ADD_TASK", (state, action) => {
//       state.push({ id: ++id, task: action.payload.task, completed: false });
//     })
//     .addCase("REMOVE_TASK", (state, action) => {
//       const index = state.findIndex((t) => t.id === action.payload.id);
//       state.splice(index, 1);
//     })
//     .addCase("COMPLETE_TASK", (state, action) => {
//       const index = state.findIndex((t) => t.id === action.payload.id);
//       state[index].completed = true;
//     });
// });
// export default taskReducer;

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

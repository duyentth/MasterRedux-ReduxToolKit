import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api.js";

//initialState
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

//create slice
let id = 0;
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //action:function
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push({
        task: action.payload,
      });
    },
    removeTask(state, action) {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      state.tasks.splice(index, 1);
    },
    completeTask(state, action) {
      console.log("payload: ", action.payload);
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      console.log("index:", index);
      state.tasks[index].completed = action.payload.completed;
    },
  },
});

export const {
  apiRequested,
  apiRequestFailed,
  getTasks,
  addTask,
  removeTask,
  completeTask,
} = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;

//Action Creators
const url = "/tasks";

export const loadTasks = () => {
  return apiCallBegan({
    url,
    method: "GET",
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  });
};
export const addNewTask = (task) => {
  return apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
    onError: apiRequestFailed.type,
  });
};
export const deleteTask = (taskId) => {
  return apiCallBegan({
    url: `/tasks/${taskId}`,
    method: "DELETE",
    onSuccess: removeTask.type,
    onError: apiRequestFailed.type,
  });
};
export const updateCompleted = (task) => {
  return apiCallBegan({
    url: `/tasks/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completeTask.type,
    onError: apiRequestFailed.type,
  });
};

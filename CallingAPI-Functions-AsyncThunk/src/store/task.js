import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosConfig.js";

//initialState
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

//calling API by using asyncThunk function
export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get("tasks");
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

//create slice
let id = 0;
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //action:function
    getTasks: (state, action) => {
      return (state.tasks = action.payload.tasks);
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.tasks,
        completed: false,
      });
    },
    removeTask(state, action) {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      state.tasks.splice(index, 1);
    },
    completeTask(state, action) {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      state.tasks[index].completed = true;
    },
  },
  //extraReducers for calling asyncThunk API
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload.tasks;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});
export const { getTasks, addTask, removeTask, completeTask } =
  taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;

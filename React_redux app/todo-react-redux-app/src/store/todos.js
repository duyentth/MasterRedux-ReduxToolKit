import { createSlice } from "@reduxjs/toolkit";
import apiCalls from "./apiCalls.js";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
const tasksSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //action:function
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    getTodos: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      state.todos.splice(index, 1);
    },
    updateCompleted: (state, action) => {
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      state.todos[index].completed = action.payload.completed;
    },
  },
});

export const {
  apiRequested,
  apiRequestFailed,
  getTodos,
  addTodo,
  deleteTodo,
  updateCompleted,
} = tasksSlice.actions;
export default tasksSlice.reducer;

//Action creators
const url = "/tasks";
export const loadTodos = () => {
  return apiCalls({
    url,
    method: "GET",
    onStart: apiRequested.type,
    onSuccess: getTodos.type,
    onError: apiRequestFailed.type,
  });
};

export const addNewTodo = (todo) => {
  return apiCalls({
    url,
    method: "POST",
    data: todo,
    onStart: apiRequested.type,
    onSuccess: addTodo.type,
    onError: apiRequestFailed.type,
  });
};
export const deleteATodo = (todo) => {
  return apiCalls({
    url: `${url}/${todo.id}`,
    method: "DELETE",
    data: todo,
    onStart: apiRequested.type,
    onSuccess: deleteTodo.type,
    onError: apiRequestFailed.type,
  });
};
export const updateTodoCompleted = (todo) => {
  return apiCalls({
    url: `${url}/${todo.id}`,
    method: "PATCH",
    data: todo,
    onStart: apiRequested.type,
    onSuccess: updateCompleted.type,
    onError: apiRequestFailed.type,
  });
};

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos.js";
import employeesReducer from "./employees.js";
import api from "./middleware/api.js";

const rootReducer = {
  todos: todosReducer,
  employees: employeesReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), api];
  },
});
export default store;

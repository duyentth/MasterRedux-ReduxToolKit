import { configureStore } from "@reduxjs/toolkit";
import emplReducer from "./employee.js";
import taskReducer from "./task.js";
import error from "./middleware/error.js";
import log from "./middleware/log.js";
import api from "./middleware/api.js";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employee: emplReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});

export default store;

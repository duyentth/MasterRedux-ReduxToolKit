import { configureStore } from "@reduxjs/toolkit";
import emplReducer from "./employee.js";
import taskReducer from "./task.js";
import error from "../middleware/error.js";
import log from "../middleware/log.js";

const store = configureStore({
  reducer: {
    task: taskReducer,
    employee: emplReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log, error],
});

export default store;

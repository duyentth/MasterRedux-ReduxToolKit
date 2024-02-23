import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "./task.js";
// import employeeReducer from "./employee.js";

// const store = configureStore({
//   reducer: { task: taskReducer, employee: employeeReducer },
// });

import emplReducer from "./employee.js";
import taskReducer from "./task.js";

const store = configureStore({
  reducer: {
    task: taskReducer,
    employee: emplReducer,
  },
});

export default store;

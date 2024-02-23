import store from "./store/configStore.js";
import {
  loadTasks,
  addNewTask,
  updateCompleted,
  deleteTask,
} from "./store/task.js";

store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: "Get on bed early" }));
store.dispatch(updateCompleted({ id: 5, completed: false }));
store.dispatch(deleteTask(2));

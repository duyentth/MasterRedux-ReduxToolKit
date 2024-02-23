import store from "./store/configStore.js";
import { addTask, removeTask, completeTask, fetchTodo } from "./store/task.js";

const unsubscribe = store.subscribe(() =>
  console.log("Updated: ", store.getState())
);
store.dispatch(addTask("do laundry"));
store.dispatch(addTask("wash dishes"));
//unsubscribe();
store.dispatch(completeTask(1));
store.dispatch(removeTask(2));
store.dispatch(fetchTodo());
// console.log(store.getState());

console.log(store.getState());

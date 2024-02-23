import { addTask, removeTask, completeTask } from "./store/task.js";
import { addEmpl } from "./store/employee.js";
import store from "./store/configStore.js";

console.log(store.getState());
console.log(store);
const unsubscribe = store.subscribe(() =>
  console.log("updated: ", store.getState())
);
store.dispatch(addTask({ task: "do homework" }));
store.dispatch(addTask({ task: "do homework2" }));
store.dispatch(addTask({ task: "do homework3" }));
store.dispatch(completeTask({ id: 1 }));
store.dispatch(removeTask({ id: 2 }));
store.dispatch(addEmpl({ name: "duyen" }));

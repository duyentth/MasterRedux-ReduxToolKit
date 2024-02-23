import { addTask, removeTask, completeTask } from "./store/task.js";
import { addEmpl, showError } from "./store/employee.js";
import store from "./store/configStore.js";

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated: ", store.getState())
);
store.dispatch(addTask({ task: "do homework" }));
store.dispatch(showError({ error: "worst error" }));
store.dispatch(addTask({ task: "do homework2" }));
store.dispatch(addTask({ task: "do homework3" }));
store.dispatch(completeTask({ id: 1 }));
store.dispatch(removeTask({ id: 2 }));
store.dispatch(addEmpl({ name: "duyen" }));

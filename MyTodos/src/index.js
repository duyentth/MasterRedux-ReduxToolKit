import store from "./store/storeConfig";
import {
  loadTodos,
  addNewTodo,
  updateTodoCompleted,
  deleteATodo,
} from "./store/todos";

store.dispatch(loadTodos());
//store.dispatch(addNewTodo({ task: "Do laundry" }));
store.dispatch(updateTodoCompleted({ id: 5, completed: true }));
//store.dispatch(updateTodoCompleted({ id: 6, completed: true }));
//store.dispatch(deleteATodo({ id: 4 }));

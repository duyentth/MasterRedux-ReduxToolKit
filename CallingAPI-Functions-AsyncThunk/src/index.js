import { fetchTasks } from "./store/task.js";
import { addEmpl } from "./store/employee.js";
import store from "./store/configStore.js";
import axios from "axios";

//calling API with simple function
// const getAllTasks = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/tasks");
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
//   }
// };
// getAllTasks();

//calling API with AsyncThunk funtion
store.dispatch(fetchTasks());

//action type
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

//actions
export const addTask = (task) => {
  return { type: ADD_TASK, payload: task };
};
export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: id };
};
export const completeTask = (id) => {
  return { type: UPDATE_TASK, payload: id };
};

export const fetchTodo = () => async (dispatch, getState) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  console.log(todo);
  dispatch(addTask(todo.title));
};

//reducer
let id = 0;
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: ++id, task: action.payload, completed: false }];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case UPDATE_TASK:
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: true } : t
      );
    default:
      return state;
  }
};
export default todoReducer;

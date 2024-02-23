const log = (store) => (next) => (action) => {
  console.log(action);
  if (action.type === "task/addTask") {
    console.log("right type");
  } else {
    next(action);
  }
};
export default log;

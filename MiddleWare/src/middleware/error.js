const error = (store) => (next) => (action) => {
  if (action.type === "employee/showError") {
    console.log(action.payload.error);
  }
  next(action);
};

export default error;

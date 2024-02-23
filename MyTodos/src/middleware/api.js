import axios from "axios";
import apiCalls from "../store/apiCalls.js";

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCalls) {
    return next(action);
  }
  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  console.log("url: ", url);
  if (onStart) {
    store.dispatch({ type: onStart });
  }
  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url,
      method,
      data,
    });
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    store.dispatch({ type: onError, payload: { error: error.message } });
  }
};
export default api;

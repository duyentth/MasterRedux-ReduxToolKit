import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./task.js";

const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(
  todoReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

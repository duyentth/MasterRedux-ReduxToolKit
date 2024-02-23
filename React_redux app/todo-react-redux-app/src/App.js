import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <AddTodo />
      <Todos />
    </Fragment>
  );
}
export default App;

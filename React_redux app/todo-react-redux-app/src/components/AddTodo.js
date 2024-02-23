import React, { useState } from "react";
import { addNewTodo } from "../store/todos";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addNewTodo({ task: todo }));
    setTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter Todo here"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;

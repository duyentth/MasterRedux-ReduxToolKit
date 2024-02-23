import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../store/todos.js";

const Todos = () => {
  const { todos, loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  console.log(todos);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {todos.map((todo, idx) => (
            <p key={idx}>{todo.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Todos;

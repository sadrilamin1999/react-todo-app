import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const Home = (todo) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const removeHandler = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "#300338" }}>Todo App</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onRemoveTodo={removeHandler} />
    </div>
  );
};

export default Home;

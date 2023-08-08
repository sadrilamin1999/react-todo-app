import React from "react";
import style from "./home.module.css";
import Todos from "./Todos";

const dummyTodos = [
  {
    id: 1,
    title: "todo title 1",
    desc: "todo 1 description is here..",
  },
  {
    id: 2,
    title: "todo title 2",
    desc: "todo 2 description is here..",
  },
];
const Home = () => {
  return (
    <div className={style.container}>
      <h1 style={{ color: "#300338" }}>Todo App</h1>
      <Todos todos={dummyTodos} />
    </div>
  );
};

export default Home;

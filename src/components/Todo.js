import React from "react";
import style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const deleteHandler = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button className={style.btn} onClick={() => deleteHandler(id)}>
        <i className="fa fa-trash fa-2x"></i>
      </button>
    </article>
  );
};

export default Todo;

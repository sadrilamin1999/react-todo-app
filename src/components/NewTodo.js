import React, { useState } from "react";
import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  // changeHandler
  const changeHandler = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  // submit handler
  const submitHander = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={submitHander}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={changeHandler}
        />
      </div>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;

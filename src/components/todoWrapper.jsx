import React from "react";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const todoWrapper = () => {
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm />
      <TodoList />
    </div>
  );
};

export default todoWrapper;

import React, { useState } from "react";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const todoWrapper = () => {
  const [todos, setTodos] = useState([
    { content: "學習", id: Math.random() },
    { content: "吃飯", id: Math.random() },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random() }]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="todoWrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoList todo={todo} key={todo.id} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};
export default todoWrapper;

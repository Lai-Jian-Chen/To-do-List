import React, { useState } from "react";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const todoWrapper = () => {
  const [todos, setTodos] = useState([
    { content: "學習", id: Math.random(), isComplet: false, isEdit: false },
    { content: "吃飯", id: Math.random(), isComplet: false, isEdit: false },
  ]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      { content, id: Math.random(), isComplet: false, isEdit: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleComplet = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isComplet: !todo.isComplet } : todo;
      })
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return id === todo.id
          ? { ...todo, content: newContent, isEdit: false }
          : todo;
      })
    );
  };

  return (
    <div className="todoWrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      <div className="line"></div>
      {todos.map((todo) => {
        return (
          <TodoList
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleComplet={toggleComplet}
            toggleEdit={toggleEdit}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};
export default todoWrapper;

import React, { useState, useEffect } from "react";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const todoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todos")) || [
        {
          content: "擁有自我意識",
          id: Math.random(),
          isComplet: true,
          isEdit: false,
        },
        {
          content: "變成一隻魚",
          id: Math.random(),
          isComplet: false,
          isEdit: false,
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          ? { ...todo, content: newContent, isComplet: false, isEdit: false }
          : todo;
      })
    );
  };

  return (
    <div className="todoWrapper">
      <h1>備忘錄</h1>
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

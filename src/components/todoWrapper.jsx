import React, { useState, useEffect } from "react";
import CreateForm from "./CreateForm";
import TodoList from "./TodoList";

const todoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todos")) || [
        {
          content: "準備面試",
          id: Math.random(),
          isComplet: true,
          isEdit: false,
        },
        {
          content: "打掃房間",
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
          ? { ...todo, content: newContent, isEdit: false }
          : todo;
      })
    );
  };

  return (
    <div className="todoWrapper">
      <h1>待辦清單</h1>
      <CreateForm addTodo={addTodo} />
      <div className="line"></div>
      <div className="todolist_group">
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
    </div>
  );
};
export default todoWrapper;

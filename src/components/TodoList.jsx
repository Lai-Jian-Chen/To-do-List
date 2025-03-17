import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ todo, deleteTodo, toggleComplet }) => {
  return (
    <div className={`TodoList ${todo.isComplet ? "complet" : ""}`}>
      <p
        onClick={() => {
          toggleComplet(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <CiEdit className="list-Btn" />
        <RiDeleteBin6Line
          className="list-Btn"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;

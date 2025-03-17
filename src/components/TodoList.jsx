import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditForm from "./EditForm";

const TodoList = ({
  todo,
  deleteTodo,
  toggleComplet,
  toggleEdit,
  editTodo,
}) => {
  return todo.isEdit ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`TodoList ${todo.isComplet ? "complet" : ""}`}>
      <p
        onClick={() => {
          toggleComplet(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <CiEdit className="list-Btn" onClick={() => toggleEdit(todo.id)} />
        <RiDeleteBin6Line
          className="list-Btn"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoList;

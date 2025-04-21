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
      <div className="todo_content" onClick={() => toggleComplet(todo.id)}>
        <input
          type="checkbox"
          checked={todo.isComplet}
          onChange={() => toggleComplet(todo.id)} // 切換完成狀態
        />
        <p>{todo.content}</p>
      </div>
      <div className="icons">
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

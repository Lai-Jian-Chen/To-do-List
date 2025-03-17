import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ todo, deleteTodo }) => {
  const deleteHandler = () => deleteTodo(todo.id);

  return (
    <div className="TodoList">
      <p>{todo.content}</p>
      <div>
        <CiEdit className="list-Btn" />
        <RiDeleteBin6Line className="list-Btn" onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default TodoList;

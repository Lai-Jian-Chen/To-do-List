import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = () => {
  return (
    <div className="TodoList">
      <p>學習</p>
      <div>
        <CiEdit className="list-Btn" />
        <RiDeleteBin6Line className="list-Btn" />
      </div>
    </div>
  );
};

export default TodoList;

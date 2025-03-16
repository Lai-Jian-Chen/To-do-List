import React from "react";
import CreateForm from "./CreateForm";

const todoWrapper = () => {
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm />
    </div>
  );
};

export default todoWrapper;

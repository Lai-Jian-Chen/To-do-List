import React, { useState } from "react";

function EditForm({ todo, editTodo }) {
  const [newContent, setContent] = useState(todo.content);

  const btnHandler = (e) => {
    e.preventDefault();
    editTodo(todo.id, newContent);
  };

  return (
    <form className="CreateForm">
      <input
        type="text"
        id="inputText"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={newContent}
      />
      <button id="addBtn" type="submit" onClick={btnHandler}>
        完成
      </button>
    </form>
  );
}

export default EditForm;

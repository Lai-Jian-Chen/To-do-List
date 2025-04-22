import React, { useState } from "react";

function EditForm({ todo, editTodo }) {
  const [newContent, setContent] = useState(todo.content);

  const btnHandler = (e) => {
    e.preventDefault();
    if (newContent) {
      editTodo(todo.id, newContent);
    }
  };

  return (
    <form className="edit-form">
      <input
        type="text"
        id="editText"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={newContent}
      />
      <button id="editBtn" type="submit" onClick={btnHandler}>
        完成
      </button>
    </form>
  );
}

export default EditForm;

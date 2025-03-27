import React, { useState } from "react";

const CreateForm = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const btnHandler = (e) => {
    e.preventDefault();
    if (content) {
      addTodo(content);
    }
    setContent("");
  };

  const inputHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className="CreateForm">
      <input
        type="text"
        placeholder="<<< 輸入 <<<"
        id="inputText"
        onChange={inputHandler}
        value={content}
      />
      <button id="addBtn" type="submit" onClick={btnHandler}>
        加入
      </button>
    </form>
  );
};

export default CreateForm;

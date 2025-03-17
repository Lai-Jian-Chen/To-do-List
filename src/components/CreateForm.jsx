import React, { useState } from "react";

const CreateForm = () => {
  const [content, setContent] = useState("");

  const btnHandler = (e) => {
    e.preventDefault();
    setContent("");
  };

  const inputHandler = (e) => {
    content = e.target.value;
  };

  return (
    <form className="CreateForm">
      <input
        type="text"
        placeholder="<<< 輸入 <<<"
        id="inputText"
        value={content}
        onChange={inputHandler}
      />
      <button id="addBtn" type="submit" onClick={btnHandler}>
        加入
      </button>
    </form>
  );
};

export default CreateForm;

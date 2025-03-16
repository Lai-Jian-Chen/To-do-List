import React from "react";

const CreateForm = () => {
  return (
    <form className="CreateForm">
      <input type="text" placeholder="<<< 輸入 <<<" id="inputText" />
      <button id="addBtn" type="submit">
        加入
      </button>
    </form>
  );
};

export default CreateForm;

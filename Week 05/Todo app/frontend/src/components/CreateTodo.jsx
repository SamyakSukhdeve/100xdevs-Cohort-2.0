import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: desc,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((data) => {
            const json = data.json();
            alert("Todo Created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
};

export default CreateTodo;

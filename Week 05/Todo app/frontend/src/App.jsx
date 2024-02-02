import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodo] = useState([]);
  fetch("http://localhost:3000/todo")
    .then(async (data) => {
      const json = await data.json();
      setTodo(json.todos);
    })
    .catch((e) => console.log(e));

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(3);

  return (
    <div>
      <h1>useEffect---</h1>
      <div>
        <button onClick={() => setCount(1)}>1</button>
        <button onClick={() => setCount(2)}>2</button>
        <button onClick={() => setCount(3)}>3</button>
        <button onClick={() => setCount(4)}>4</button>

        <Todo id={count} />
      </div>
    </div>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
      res
    ) {
      const json = await res.json();
      setTodo(json.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default UseEffect;

import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useIsOnline } from "./hooks/useIsOnline";
import useMousePointer from "./hooks/useMousePointer";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, loading } = useTodos(10);
  const isOnline = useIsOnline();
  const mousePointer = useMousePointer();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  return (
    <div>
      <div>
        {loading
          ? "loading..."
          : todos.map((todo) => <Track key={todo._id} todo={todo} />)}
      </div>
      <div>{isOnline ? "You are Online" : "You are offline"}</div>
      <div>
        Your mouse position is {mousePointer.x}
        {mousePointer.y}
      </div>
      <div>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <div>{debouncedValue}</div>
      </div>
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.todo}
      <br />
      {todo.userId}
    </div>
  );
}

export default App;

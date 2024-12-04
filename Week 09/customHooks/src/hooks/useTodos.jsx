import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://dummyjson.com/todos/random/10").then((res) => {
        setTodos(res.data);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://dummyjson.com/todos/random/10").then((res) => {
      setTodos(res.data);
      setLoading(false);
    });

    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}

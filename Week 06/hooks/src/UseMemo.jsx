import { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState();

  const count = useMemo(() => {
    let finalCount = 0;
    for (var i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
      console.log("meme");
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <h1>useMemo---</h1>
      <input onChange={(e) => setInputValue(e.target.value)} />
      <h3>Sum is + {count}</h3>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
};

export default UseMemo;

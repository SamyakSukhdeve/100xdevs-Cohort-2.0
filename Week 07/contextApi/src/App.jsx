import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";

//Context API
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

const Count = ({ setCount }) => {
  return (
    <div>
      <RenderCount />
      <Button setCount={setCount} />
    </div>
  );
};

const RenderCount = () => {
  const count = useContext(CountContext);
  return <div>{count}</div>;
};

const Button = ({ setCount }) => {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;

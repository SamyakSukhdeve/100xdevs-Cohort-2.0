import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";

//Context API
function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

const Count = () => {
  return (
    <div>
      <RenderCount />
      <Button />
    </div>
  );
};

const RenderCount = () => {
  console.log("count");

  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
};

const Button = () => {
  const setCount = useSetRecoilState(countAtom);
  console.log("button");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;

import { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setcount] = useState(0);

  const reRender = useRef(0);

  const handleReRender = () => {
    // Update state to force re-render
    setcount(count + 1);
  };

  reRender.current = reRender.current + 1;

  return (
    <div>
      <p>This component has rendered {reRender.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}

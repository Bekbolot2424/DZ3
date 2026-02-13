import React, { useState, useCallback } from "react";
import ChildButton from "../components/ChildButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClick = useCallback(() => {
    console.log("Counter");
  }, []);

  return (
    <div>
      <h2>Число{count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Counter
      </button>

      <ChildButton onClick={onClick} label="Click Me" />
    </div>
  );
};

export default Counter;

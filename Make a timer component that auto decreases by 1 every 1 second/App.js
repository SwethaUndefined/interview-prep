import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [timer, setTimer] = useState(new Date());
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(new Date());
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);
  return (
    <div>
      <p>Timer</p>
      <p>{timer.toLocaleTimeString()}</p>
      <p>Count : {count}</p>
    </div>
  );
};

export default App;

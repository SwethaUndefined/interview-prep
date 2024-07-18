import React, { useState, useEffect } from "react";
// import ShowTimer from "./ShowTimer";
// import Timer from "./Timer";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const incrementCount = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);
    return () => clearInterval(incrementCount);
  }, [count]);
  return (
    <div className="App">
      <p>Count : {count}</p>
      <ShowTimer />
    </div>
  );
}

export default App;

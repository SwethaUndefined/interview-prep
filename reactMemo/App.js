import "./styles.css";
import React, { useState } from "react";
import Memo from "./memo";

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    setData([...data, 6]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Random Number</button>
      <Memo data={data} />
    </div>
  );
};

export default App;

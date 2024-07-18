import "./styles.css";
import React, { useState } from "react";

function Callback({ handleInput }) {
  const [name, setName] = useState("Swetha");
  const changeColor = (e) => {
    handleInput(e.target.value);
  };
  return (
    <div>
      <input onChange={changeColor} />
    </div>
  );
}
export default Callback;

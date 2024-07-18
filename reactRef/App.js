import "./styles.css";
import React, { useRef } from "react";
import Callback from "./callback";

export default function App() {
  const divRef = useRef(null);

  const handleColorChange = (color) => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = color;
    }
  };
  // const handleInput = (e) => {
  //   let value = e.target.value;
  //   console.log(value);
  //   handleColorChange(value);
  // };
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "transparent",
          border: "1px solid blue",
        }}
        onChange={handleColorChange}
        ref={divRef}
      ></div>
      <br />
      <br />
      {/* <input onChange={handleInput} placeholder="Type the Color Here" /> */}
      <Callback handleInput={handleColorChange} />
    </div>
  );
}

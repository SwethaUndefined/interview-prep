// Refs in React provide a way to access and interact with DOM nodes or React elements created in the render method.
//  They are useful for:

// Managing focus, text selection, or media playback.
// Triggering imperative animations.
// Integrating with third-party DOM libraries.




import "./styles.css";
import React, { useRef } from "react";
import Callback from "./callback";

function App() {
  const mainDiv = useRef();

  const handleChange = (color) => {
    console.log(color);
    if (mainDiv.current) {
      mainDiv.current.style.background = color;
    }
  };
  return (
    <div className="App">
      <div
        style={{ border: "1px solid black", height: "300px", width: "300px" }}
        onChange={handleChange}
        ref={mainDiv}
      />
      <Callback onchange={handleChange} />
    </div>
  );
}


const Callback = ({ onchange }) => {
    const handleColorChange = (e) => {
      const value = e.target.value;
      onchange(value);
    };
    return <input style={{ marginTop: "10px" }} onChange={handleColorChange} />;
  };
  
  export default Callback;
  
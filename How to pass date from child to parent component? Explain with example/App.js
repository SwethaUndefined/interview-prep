import React, { useState } from "react";
import ChildComponent from "./childComponent";

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <p>{input ? input : "No Input Provided"}</p>
      <ChildComponent setInput={setInput} />
    </div>
  );
}

export default App;
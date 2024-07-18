import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Automated Clock Using React</h1>
      <Clock />
    </div>
  );
};

export default App;

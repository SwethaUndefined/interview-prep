import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  let arr = [
    {
      id: 1,
      color: "red",
      value: "#f00",
    },
    {
      id: 2,
      color: "green",
      value: "#0f0",
    },
    {
      id: 3,
      color: "blue",
      value: "#00f",
    },
    {
      id: 4,
      color: "cyan",
      value: "#0ff",
    },
    {
      id: 5,
      color: "magenta",
      value: "#f0f",
    },
    {
      id: 6,
      color: "yellow",
      value: "#ff0",
    },
    {
      id: 7,
      color: "black",
      value: "#000",
    },
  ];

  const [list, setList] = useState(arr);

  const searchBycolor = (e) => {
    let value = e.target.value.toLowerCase();
    let filteredValue = arr.filter((arr) => {
      return arr.color.toLowerCase().includes(value);
    });
    setList(filteredValue);
  };
  return (
    <div className="App">
      <input placeholder="searchBycolor" onChange={searchBycolor} />
      {list.map((arr) => {
        return (
          <div key={arr.id}>
            <li>
              {arr.color} - {arr.value}
            </li>
          </div>
        );
      })}
    </div>
  );
}

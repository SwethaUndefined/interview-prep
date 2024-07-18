import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let response = res.data;
      var names = response.map((ele) => {
        return ele.name;
      });
      setData(names);
      setFilteredData(names);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    var filterNames = data.filter((item) => {
      return item.toLowerCase().includes(value);
    });
    setFilteredData(filterNames);
  };

  return (
    <div className="App">
      <p>List of Names:</p>
      <input onChange={handleChange} />
      {filteredData &&
        filteredData.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </div>
  );
}

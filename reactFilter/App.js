import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        var ans = res.data.products.map((item) => {
          return item.title;
        });
        console.log(ans);
        setData(ans);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.trim() !== "") {
      const filteredData = data.filter((item) => {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterData(filteredData);
    } else {
      setFilterData([]); 
    }
  };
  const renderData = filterData.length > 0 ? filterData : data;

  return (
    <div>
      <input placeholder="Search by name" onChange={handleChange} />
      <ul>
        {renderData.map((res) => {
          return <li key={res.id}>{res}</li>; 
        })}
      </ul>
    </div>
  );
}

export default App;

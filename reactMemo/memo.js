import React, { useState, useMemo } from "react";

const Memo = ({ data }) => {
  const expensiveResult = useMemo(() => {
    console.log("Calculating expensive result...");
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]);

  return (
    <div>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};
export default Memo;

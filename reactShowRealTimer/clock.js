import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;

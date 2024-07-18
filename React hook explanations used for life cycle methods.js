import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log('Component mounted');

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array to run effect only once

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]); // Dependency array with count as dependency

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;

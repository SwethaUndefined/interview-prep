// React.memo is a HOC and it is used for performance optimization for functional components. It does the shallow 
// comparision of state and props


import React from 'react';

const MyComponent = React.memo(({ prop1, prop2 }) => {
  console.log('Rendering MyComponent...');
  return (
    <div>
      <p>Prop 1: {prop1}</p>
      <p>Prop 2: {prop2}</p>
    </div>
  );
});

export default MyComponent;


// Only the props1 and props are changed then only this component will rerender
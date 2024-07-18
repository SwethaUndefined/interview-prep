// Render props: Render props is a technique for sharing code between React components using a prop whose value 
// is a function that a component uses to know what to render.


// MouseTracker component using functional component and hooks
import React, { useState } from 'react';

const MouseTracker = ({ render }) => {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMouseState({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      {/* Render props usage */}
      {render(mouseState)}
    </div>
  );
};

// App component using MouseTracker with render props
import React from 'react';
import MouseTracker from './MouseTracker';

const App = () => {
  return (
    <MouseTracker
      render={(mouseState) => (
        <p>The current mouse position is ({mouseState.x}, {mouseState.y})</p>
      )}
    />
  );
};

export default App;

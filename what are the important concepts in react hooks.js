// React hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features 
// in functional components. Here are the key concepts:

// useState:

// Purpose: Allows you to add state to a functional component.
// Usage:

const [count, setCount] = useState(0);
//========================================================================
// useEffect:

// Purpose: Allows you to perform side effects in functional components, similar to lifecycle 
// methods (componentDidMount, componentDidUpdate, and componentWillUnmount) in class components.
// Usage:

useEffect(() => {
  // Effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]); // Run effect when dependencies change

//========================================================================

// useContext:

// Purpose: Allows you to use context to pass data through the component tree without having to pass props down manually at every level.
// Usage:

const value = useContext(MyContext);
//========================================================================

// useReducer:

// Purpose: An alternative to useState for managing more complex state logic. It is similar to Redux but built into React.
// Usage:
const [state, dispatch] = useReducer(reducer, initialState);

// useRef:

// Purpose: Allows you to persist values between renders and directly access DOM elements.
// Usage:

const inputRef = useRef(null);
//========================================================================

// useMemo:

// Purpose: Allows you to memoize expensive calculations, recomputing them only when dependencies change.
// Usage:

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
//========================================================================

// useCallback:

// Purpose: Returns a memoized callback function, useful to prevent unnecessary re-renders.
// Usage:

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
//========================================================================

// useLayoutEffect:

// Purpose: Similar to useEffect, but it fires synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.
// Usage:

useLayoutEffect(() => {
  // Synchronous effect
}, [dependencies]);
//========================================================================

// Custom Hooks:

// Purpose: Allows you to extract and share logic between components.
// Usage:

const useCustomHook = () => {
  const [state, setState] = useState(initialState);
  // Custom logic here
  return [state, setState];
};
//========================================================================

import React, { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect } from 'react';

const MyContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const App = () => {
  const [count, setCount] = useState(0);
  const value = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const inputRef = useRef(null);
  const memoizedValue = useMemo(() => count * 2, [count]);
  const memoizedCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('Cleanup on unmount or dependencies change');
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log('Layout effect');
  }, [count]);

  return (
    <MyContext.Provider value={{ value }}>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={memoizedCallback}>Increment</button>
        <input ref={inputRef} />
        <p>Memoized value: {memoizedValue}</p>
      </div>
    </MyContext.Provider>
  );
};

export default App;

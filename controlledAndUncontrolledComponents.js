// Controlled and uncontrolled components are terms used in React to describe how form elements
//  (like inputs, selects, and textareas) manage their state and behavior. Here’s an explanation of each:

// Controlled Components
// Definition: Controlled components are components where form data is handled by React state.
// Usage:
// The value of the form element is controlled by React state (useState or this.state).
// Changes to the input value are handled by React via state updates and controlled through onChange event handlers.
// Example:


import React, { useState } from 'react';

const ControlledComponent = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

// export default ControlledComponent;

// Benefits:
// Provides a single source of truth for the input value.
// Enables validation and manipulation of the input value before updating the state.


// Ensures consistency between the UI and React state.
// Uncontrolled Components
// Definition: Uncontrolled components are components where form data is handled by the DOM itself.
// Usage:
// The value of the form element is maintained by the DOM using ref.
// Initial values can be set using the defaultValue or defaultChecked props.

import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="Initial Value" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default UncontrolledComponent;
// Benefits:
// Useful for integrating with third-party libraries that expect direct DOM access.
// Simplifies handling of form elements where React state management is unnecessary.
// Faster rendering for large forms since React doesn’t need to manage every change.
// Choosing Between Controlled and Uncontrolled Components
// Controlled Components: Preferred when you need React to manage and validate the form state. Suitable for forms requiring complex validation and dynamic behavior.
// Uncontrolled Components: Suitable for simpler forms or when integrating with legacy code or non-React libraries.
// Conclusion
// Understanding the distinction between controlled and uncontrolled components in React helps in choosing the appropriate approach based on your application’s needs. Controlled components provide more control and validation capabilities, while uncontrolled components offer simplicity and direct DOM manipulation when necessary.









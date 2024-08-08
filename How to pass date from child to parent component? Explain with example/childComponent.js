import React from 'react'

const ChildComponent = ({setInput}) => {
    const handleChange = (e) => {
        setInput(e.target.value);
      };
      return <input onChange={handleChange} />;
}

export default ChildComponent
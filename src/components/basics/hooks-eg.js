import React, { useState } from 'react';

function HooksExample() {
  const [count, setCount] = useState(0);

  function handleCLick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1> Calling from Hooks </h1>
      <button onClick={handleCLick}> {count}</button>
    </div>
  );
}

export default HooksExample;

import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <>
      <h3>Counter</h3>
      <button onClick={incrementCounter}>
          Increment
      </button>
      <p>Clicks: {counter}</p>
    </>
  );
}
 
export default Counter;
import React, { useState } from 'react';
import '../styles/events.css';

const Events = () => {
  const [condition, setCondition] = useState(true);
  const onConditional = () => setCondition(!condition);

  return (
    <>
      <button onClick={() => onConditional()}>
        Add item
      </button>
      <p>State value is {condition.toString()}</p>
    </>
  );
}

export default Events;
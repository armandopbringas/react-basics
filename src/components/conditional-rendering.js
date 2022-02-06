import React, { useState } from 'react';
import '../styles/conditional-rendering.css';

const ConditionalRendering = () => {
  const [condition, setCondition] = useState(true);
  const onConditional = () => setCondition(!condition);

  return (
    <>
      <h3>Conditional Rendering</h3>
      <button onClick={onConditional}>Add item</button>
      {condition && <p>Show message only in true</p>}
    </>
  );
}

export default ConditionalRendering;
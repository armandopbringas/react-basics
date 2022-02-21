import { useState } from 'react';

const useCounter = initialvalue => {
  const [ counter, setCounter ] = useState(initialvalue);
  const increment = () => setCounter(counter+1);
  const reset = () => setCounter(initialvalue);
  return [ counter, increment, reset ];
}

export default useCounter;
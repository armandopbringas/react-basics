import React, { useState, useEffect } from 'react';

console.log('Pre-render');

const LifCycle = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('useEffect []');
    const cleanup = () => console.log('cleanup useEffect []');
    return cleanup;
  }, [])

  useEffect(() => {
    console.log('useEffect no dependency');
    const cleanup = () => console.log('cleanup useEffect no dependenct');
    return cleanup;
  })

  useEffect(() => {
    console.log('useEffect [counter1]');
    const cleanup = () => console.log('cleanup useEffect [counter1]');
    return cleanup;
  }, [counter1]);

  useEffect(() => {
    console.log('useEffect [counter2]');
    const cleanup = () => console.log('cleanup useEffect [couter2]');
    return cleanup;
  }, [counter2]);

  useEffect(() => {
    console.log('useEffect [counter1, counter2]');
    const cleanup = () => console.log('cleanup useEffect [counter1, couter2]');
    return cleanup;
  }, [counter1, counter2]);

  return (
    <>
      { console.log('return render') }
      <h1>Clicks c1: {counter1}</h1>
      <h1>Clicks c2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1+1)}>
        Increment c1
      </button>
      <button onClick={() => setCounter2(counter2+1)}>
        Increment c2
      </button>
    </>
  );
}

export default LifCycle;

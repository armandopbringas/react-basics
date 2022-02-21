import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [ counter, increment, reset ] = useCounter(0);

  return (
    <div>
      <p>Clicks: {counter}</p>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}
 
export default Counter;
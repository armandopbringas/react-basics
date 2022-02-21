import Header from '../components/header';
import Counter from '../components/counter';
import Todo from '../components/todo';
import MouseMove from '../components/mouse-position';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <Header />
        <h1>Custom hooks</h1>
        <Counter />
        <hr />
        <Todo />
        <hr />
        <MouseMove />
      </main>
    </>
  );
}

export default App;

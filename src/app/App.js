import React, { useState } from 'react';
import Header from '../components/header';
import Events from '../components/events';
import './App.css';

const defalutTodos = [
  {text:'Todo one', completed: false},
  {text:'Todo two', completed: false},
  {text:'Todo three', completed: false}
];

function App() {
  const [ todos, setTodos ] = useState(defalutTodos);

  const todoDone = text => {
    const todoItem = todos.filter(item => item.text === text);
    const newTodos = [...todos];
    newTodos[todoItem].completed = true;
    setTodos(newTodos);
  }

  return (
    <>
      <main className='app'>
        <Header />
        <h2>Events</h2>
        {todos.map((todo, id) => {
          return (
            <Events 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => todoDone(todo.text)}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;

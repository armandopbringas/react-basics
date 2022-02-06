import React from 'react';
import Header from '../components/header';
import Events from '../components/events';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <Header />
        <h2>Events</h2>
        <Events />
      </main>
    </>
  );
}

export default App;
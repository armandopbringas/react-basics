import React, { useState } from 'react';
import Header from '../components/header';
import LifCycle from '../components/life-cycle';
import FetchCard from '../components/fetch-card';
import BpViewer from '../components/bp-viewer';
import './App.css';

function App() {
  const [ show, setShow ] = useState(false);

  return (
    <>
      <main className='app'>
        <Header />
        <LifCycle />
        <hr />
        <FetchCard />
        <hr />
        <button onClick={() => setShow(!show)}>Hide / Show</button>
        { show && <BpViewer /> }
      </main>
    </>
  );
}

export default App;

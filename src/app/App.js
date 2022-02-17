import Header from '../components/header';
import LifCycle from '../components/life-cycle';
import FetchCard from '../components/fetch-card';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <Header />
        <LifCycle />
        <hr />
        <FetchCard />
      </main>
    </>
  );
}

export default App;

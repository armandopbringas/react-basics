import Header from '../components/header';
import LifCycle from '../components/life-cycle';
import FetchCard from '../components/fetch-card';
import BpViewer from '../components/bp-viewer';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <Header />
        <LifCycle />
        <hr />
        <FetchCard />
        <hr />
        <BpViewer />
      </main>
    </>
  );
}

export default App;

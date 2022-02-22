import Header from '../components/header';
import MainComponent from '../components/main-component';
import StoreProvider from '../store/store-provider';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <StoreProvider>
          <Header />
          <MainComponent />
        </StoreProvider>
      </main>
    </>
  );
}

export default App;

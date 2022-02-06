import React from 'react';
import Header from '../components/header';
import ConditionalRendering from '../components/conditional-rendering';
import Counter from '../components/counter';
import ErrorSim from '../components/error-sim';
import ProductApp from '../components/product-app';
import  CartApp from '../components/cart-app';
import './App.css';

function App() {
  return (
    <>
      <main className='app'>
        <Header />
        <h2>useState</h2>
        <ConditionalRendering />
        <hr />
        <Counter />
        <hr />
        <ErrorSim />
        <hr />
        <ProductApp />
        <hr />
        <CartApp />
      </main>
    </>
  );
}

export default App;
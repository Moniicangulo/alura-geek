import React from 'react';
import { Header } from './components/Header/Header.tsx';
import { Product } from './components/Products/Products.tsx';
import { AddProductCard } from './components/AddProductCard/AddProductCard.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddProductCard/>
      <Product/>
    </div>
  );
}

export default App;

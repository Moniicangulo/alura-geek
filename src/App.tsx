import React, { useState } from "react";
import { Header } from "./components/Header/Header.tsx";
import { Product } from "./components/Products/Products.tsx";
import { AddProductCard } from "./components/AddProductCard/AddProductCard.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import './App.css';

export const App = () => {

  const [products, setProducts] = useState([]);
  const handleProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className="App">
      <Header />
      <main className="main__section">
        <Product />
        <AddProductCard onProductAdded={handleProductAdded}/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;

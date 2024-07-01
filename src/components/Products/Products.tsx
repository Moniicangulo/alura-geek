import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard.tsx";
import "./Products.css";

interface Product {
  id: number;
  name: string;
  price: string;
  imagen: string;
}

export const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data); 
          setProducts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        console.log("Error:aa");
      });
  }, []);

  return (
    <div className="products__container">
      <h2>Mis productos:</h2>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.imagen}
              productName={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p>Sin productos disponibles.</p>
        )}
      </div>
    </div>
  );
};
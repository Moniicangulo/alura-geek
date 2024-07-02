import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard.tsx";
import "./Products.css";

interface Product {
  id: string;
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Actualizar la lista de productos después de la eliminación
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  return (
    <div className="products__container">
      <h2>Mis productos:</h2>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              id={product.id}
              img={product.imagen}
              name={product.name}
              price={product.price}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>Sin productos disponibles.</p>
        )}
      </div>
    </div>
  );
};
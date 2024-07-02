import React, { useState } from 'react';
import './AddProductCard.css';

interface ValidationErrors {
    productName?: string;
    productPrice?: string;
    productImg?: string;
  }
  
  export const AddProductCard = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImg, setProductImg] = useState('');
    const [errors, setErrors] = useState<ValidationErrors>({});
  
    const validateInputs = () => {
      const validationErrors: ValidationErrors = {};
      if (!productName) {
        validationErrors.productName = 'El nombre es obligatorio';
      }
      if (!productPrice) {
        validationErrors.productPrice = 'El precio es obligatorio';
      }
      if (!productImg) {
        validationErrors.productImg = 'La URL de la imagen es obligatoria';
      }
      setErrors(validationErrors);
      return Object.keys(validationErrors).length === 0;
    };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInputs()) {
        return;
      }

    const data = {
      name: productName,
      price: parseFloat(productPrice),
      imagen: productImg,
      id: Math.floor(Math.random() * 1000).toString() // Genera un ID aleatorio para el ejemplo
    };

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Data received:", responseData);
      
      setProductName('');
      setProductPrice('');
      setProductImg('');
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };


  return (
    <div className='AddProductCard'>
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='input__container'>
          <label htmlFor="productName">Nombre</label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder='Nombre'
          />
           {errors.productName && <p className='error'>{errors.productName}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor="productPrice">Precio</label>
          <input
            id='productPrice'
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder='Precio'
          />
           {errors.productPrice && <p className='error'>{errors.productPrice}</p>}

        </div>
        <div className='input__container'>
          <label htmlFor="productImg">Imagen</label>
          <input
            id='productImg'
            type="text"
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
            placeholder='Url imagen'
          />
           {errors.productImg && <p className='error'>{errors.productImg}</p>}
        </div>
        <button type="submit" className='add__button'>Agregar +</button>
      </form>
    </div>
  );
};
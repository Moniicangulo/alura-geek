import React from 'react'
import './AddProductCard.css'

export const AddProductCard = () => {
    return (
        <div className='AddProductCard'>
            <h2>Agregar nuevo producto</h2>
            <form action="" className='form'>
                <div className='input__container'>
                    <label htmlFor="productName">Nombre</label>
                    <input id="productName" type="text" placeholder='Nombre'/>
                </div>
                <div className='input__container'>
                    <label htmlFor="productPrice">Precio</label>
                    <input id='productPrice' type="number" minLength={0} maxLength={999999} placeholder='Precio'/>
                </div>
                <div className='input__container'>
                    <label htmlFor="productImg">Imagen</label>
                    <input id='productImg' type="text" placeholder='Url imagen' />
                </div>
                <button className='add__button'>Agregar +</button>
            </form>
        </div>
    );
};
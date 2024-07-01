import React from "react";
import { Trash2 } from "lucide-react";
import "./ProductCard.css";

export const ProductCard = ({ img, productName, price }) => {
  return (
    <div className="product__card">
      <figure>
        <img src={img} alt={productName} />
      </figure>
      <div className="info__container">
        <div>
          <p>{productName}</p>
          <p>
            $ <span>{price}</span> MNX
          </p>
        </div>
        <div>
          <Trash2 color="#FDF7F7"/>
        </div>
      </div>
    </div>
  );
};

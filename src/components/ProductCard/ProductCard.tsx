import React from "react";
import { Trash2 } from "lucide-react";
import "./ProductCard.css";

export const ProductCard = ({id, img, name, price, onDelete }) => {
  return (
    <div className="product__card">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="info__container">
        <div>
          <p>{name}</p>
          <p>
            $ <span>{price}</span> MNX
          </p>
        </div>
        <div>
          <Trash2 color="#FDF7F7" className="delete" onClick={() => onDelete(id)}/>
        </div>
      </div>
    </div>
  );
};

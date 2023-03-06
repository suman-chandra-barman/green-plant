import React from "react";

const ProductCard = ({ product }) => {
  const { image, name, discount_price, price, rating } = product;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card border border-2 card-hover">
        <img src={image} className="card-img-top" alt="Plant" />
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <p className="card-text h4">
              ${parseFloat(discount_price).toFixed(2)}
            </p>
            <p className="card-text text-decoration-line-through">
              ${parseFloat(price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

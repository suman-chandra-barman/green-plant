import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const { image, name, price, discount_price, rating } = product;

  return (
    <section>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <PhotoProvider>
              <PhotoView src={image}>
                <img
                  src={image}
                  className="img-fluid"
                  alt="Plant"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>
              <h4>{name}</h4>
              <div className="d-flex gap-3 align-items-center">
                <p className="card-text h4">
                  ${parseFloat(discount_price).toFixed(2)}
                </p>
                <p className="card-text text-decoration-line-through">
                  ${parseFloat(price).toFixed(2)}
                </p>
              </div>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

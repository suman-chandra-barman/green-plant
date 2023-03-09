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
                  className="img-fluid w-100"
                  alt="Plant"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="py-2">
              <h4>{name}</h4>
              <p>Rating: {rating}</p>
              <div className="d-flex gap-3 align-items-center">
                <p className="card-text fs-3 fw-bold">
                  <span>Price: </span>${parseFloat(discount_price).toFixed(2)}
                </p>
                <p className="card-text fs-5 text-decoration-line-through">
                  ${parseFloat(price).toFixed(2)}
                </p>
              </div>

              <p>
                Availability: <span>10</span> <span>In Stock</span>
              </p>

              <p>
                The EcoSmart Fleece Hoodie full-zip hooded jacket provides
                medium weight fleece comfort all year around. Feel better in
                this sweatshirt because Hanes keeps plastic bottles of landfills
                by using recycled polyester.7.8 ounce fleece sweatshirt made
                with up to 5 percent polyester created from recycled plastic.
              </p>
              <div className="my-3">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={1}
                  className="text-center ms-2"
                />
              </div>
              <button className="btn btn-green-black w-75">Add To Card</button>
              <button className="btn btn-black w-75 mt-3">Buy It Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="container mx-auto my-5">
      <ul className="nav justify-content-center  gap-5">
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            style={{ textDecoration: "none" }}
          >
            TOP RATED
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            style={{ textDecoration: "none" }}
          >
            BESTSELLER
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={{ textDecoration: "none" }}>
            NEW ARRIVALS
          </NavLink>
        </li>
      </ul>
      <div className="row g-3 my-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

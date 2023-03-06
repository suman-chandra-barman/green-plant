import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import ShoppingArea from "../ShoppingArea/ShoppingArea";

const Home = () => {
  return (
    <main>
      <Banner />
      <ShoppingArea />
      <About />
      <Products />
    </main>
  );
};

export default Home;

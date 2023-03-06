import React from "react";
import About from "../../About/About";
import Advertise from "../Advertise/Advertise";
import Shop from "../Advertise/Shop";
import Banner from "../Banner/Banner";
import FeedBack from "../FeedBack/FeedBack";
import Products from "../Products/Products";
import ShoppingArea from "../ShoppingArea/ShoppingArea";
import Video from "../Video/Video";

const Home = () => {
  return (
    <main>
      <Banner />
      <ShoppingArea />
      <About />
      <Advertise />
      <Products />
      <Shop />
      <FeedBack />
      <Video />
    </main>
  );
};

export default Home;

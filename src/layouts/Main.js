import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavigationBar from "../pages/shared/NavigationBar";

const Main = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;

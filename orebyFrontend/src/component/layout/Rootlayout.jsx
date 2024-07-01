import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;

import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="mt-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

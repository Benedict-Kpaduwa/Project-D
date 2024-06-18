import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="sm:w-screen lg:w-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

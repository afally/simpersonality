import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <div className="home-container">
        <Navbar />

        <main> {children} </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;

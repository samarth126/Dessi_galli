import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

import Coursal from "../components/Coursal";
import Recipe from "../components/Recipe";
import About from "../components/About";
import Footer from "../components/Footer";
import Top from "../components/Top"

const Desi = () => {
  
  return (
    <div>
      <Top/>
      {/* <Navbar /> */}
      <Coursal />
      {/* <Recipe /> */}
      <About />
    

     
      <Footer />
    </div>
  );
};

export default Desi;

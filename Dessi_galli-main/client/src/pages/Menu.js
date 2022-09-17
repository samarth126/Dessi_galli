import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Top from "../components/Top"

import Footer from "../components/Footer";
import Menus from "../components/Menus";
const Menu = () => {
  let [menu, setmenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  let getMenu = async () => {
    let response = await fetch("http://localhost:8000/api/menu/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setmenu(data);
  };

  return (
    <div>
      <Top />
      <Menus/>
      
     


      
     
      <Footer />
     
    </div>
  );
};

export default Menu;

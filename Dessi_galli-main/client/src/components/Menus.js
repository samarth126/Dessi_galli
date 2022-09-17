import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menus = () => {
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
        <>
           
        <div class="slider_section"  >
            <div class="container">
                <div class="menu_custom  text-center">
                    
                    <img class= "col-md-4" src="../images/dgl.png"  />
              
                </div>
            </div>
            
            </div>
          
            <div id="fh5co-featured-menu" class="fh5co-section coss">
               
                <div class="container fh5co-heading">
                    <h2>Download full menu</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <a href="../pdfs/menu.pdf" target="_blank"><button type="button" class="btn btn-dark btn-lg btn-outline-dark"><h1>DRINKS <i class="fa-solid fa-wine-glass-empty"></i></h1></button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <a href="../pdfs/menu.pdf" target="_blank"><button type="button" class="btn btn-dark btn-lg btn-outline-dark"><h1>FOOD <i class="fa-solid fa-utensils"></i></h1></button>
                            </a>
                        </div>


                    </div>
          <div class="row">
            <div class="col-md-12 fh5co-heading ">
              <h2>Today's Menu</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ab debitis sit itaque totam, a maiores nihil,
                        nulla magnam porro minima officiis! Doloribus aliquam voluptates corporis et tempora consequuntur ipsam, itaque,
                        nesciunt similique commodi omnis. Ad magni perspiciatis, voluptatum repellat.</p>

                        </div>
                        
            {menu.map((menu) => (

            <div class="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap animate-box">
                    <div class="fh5co-item">
                        <div class="imgborder">
                      
                            <img src={"http://localhost:8000/api" + menu.dishImage} class="img-responsive" alt="menu" />
                        </div>
                  <h3>{menu.dishname}</h3>
                  <span class="fh5co-price">{menu.price}<sup>.50</sup></span>
		
					</div>
              </div>
            ))}
              
               
                
                  
                    
                      







                        </div>
                      </div>






            </div>
           
            
                        </>
    );
};

export default Menus;
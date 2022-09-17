import React, { useState, useEffect } from "react";

const Recipe = () => {
  const [topDish, setTopDish] = useState([]);

  const getTopDishes = async () => {
    let response = await fetch("http://localhost:8000/api/topdish/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setTopDish(data);
  };

  useEffect(() => {
    getTopDishes();
  }, []);

  return (
    <div>
      

       <section class="resip_section">
        <div class="container">
          <div class="">

            <div class="col-md-12">
             
            
              <div class="owl-carousel owl-theme">
               
                
                {topDish.map((topDish) => (

                <div class="item">
                  <div class="product_blog_img">
                      <img src={"http://localhost:8000/api" + topDish.img} alt="#" />
                  </div>
                  <div class="product_blog_cont">
                      <h3>{topDish.dishname}</h3>
                    <h4><span class="theme_color">$</span>10</h4>
                  </div>
                  </div>
                ))}
               
               
               

                </div>
              
              
            </div>
          </div>
        </div>
      </section>
      
     
    </div>
    





      



  );
};

export default Recipe;

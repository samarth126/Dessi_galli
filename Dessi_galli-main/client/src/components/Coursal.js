import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Coursal = () => {
  const [images, setImages] = useState([]);

  let getBanner = async () => {
    let response = await fetch("http://localhost:8000/api/banner/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setImages(data);
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div class="slider_section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div
                id="main_slider"
                class="carousel vert slide"
                data-ride="carousel"
                data-interval="4000"
              >
                <div class="carousel-inner">
                  {/* <div class="carousel-item ">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="slider_cont"> */}
                          {/* <h3
                            style={{
                              fontFamily: "Rock-Salt",
                              fontWeight: " 400"
                            }}
                          >
                            The joys of
                            <br />
                            Indian street Food
                          </h3>
                          <img src="images/logocut.png" alt="#" />


                          <Link class="main_bt_border" to="reservation">
                            Book a Table
                          </Link>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="slider_image full text_align_center"></div>
                      </div>
                    </div>
                  </div> */}

                  {images.map((image) => (
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="slider_cont">
                            {/* <h3
                              style={{
                                fontFamily: "Rock-Salt",
                                fontWeight: "400"
                              }}
                            >
                              Golgappa
                              <br />
                              {image.heading}
                            </h3>
                            <p>{image.bodyText}</p> */}
                            <img src="images/logocut.png" alt="#" />
                            <Link class="main_bt_border" to="reservation">
                              Book a Table
                            </Link>
                          </div>
                        </div>
                        <div class="col-md-7 full text_align_center">
                          <div class="slider_image">
                            <img
                              class="img-responsive rotate linear infinite"
                              // src={"./images/bhel.png"}
                              src={"http://localhost:8000/api" + image.img}
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <a
                  class="carousel-control-prev"
                  href="#main_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-up"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#main_slider"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-down"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursal;
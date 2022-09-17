import React from "react";
import Blog from "./Blog";

const About = () => {
  return (
    <div class="bg_bg">
      <br>
      </br>
      <div class="title">
        {/* <i>
                <img src="images/title.png" alt="#" />
              </i> */}
        <h2>About Our Food & Restaurant</h2>
        <p>
          It is a long established fact that a reader will be distracted
          by the readable content of a
          <br /> page when looking at its layout. The point of using
          Lorem
        </p>
      </div>
      <div class="about">
        <div class="row">

         
         
        
        </div>
        <br>
        </br>
        <div class="container">
          
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div class="about_box">
                <h3>Desi Galli</h3>
                <p>
                  India y comida volante de India es un viaje de cultura y
                  colores con experiencias inolvidalbles. Con Desi Galli les
                  acompañamos por las calles de la India, con explosion de
                  sabores, nostalgia para algunos y crear nuevos momentos para
                  los demás. Desi Galli no es un otro restaurante India sino uno
                  que llega a corazón de todos…..{" "}
                </p>
                <a href="#">
                  Read More{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
              <div class="about_img">
                <figure>
                  <img src="images/about_bg.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      <Blog />

      <section class="testimonial text-center">
        <div class="container">

          <div class="heading white-heading">
            Testimonial
            </div>
          <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">

            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <div class="testimonial4_slide">
                  
                  <p>&#34;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. &#34;</p>
                  <h4>Client 1</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 2</h4>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial4_slide">
                  {/* <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" /> */}
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 3</h4>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

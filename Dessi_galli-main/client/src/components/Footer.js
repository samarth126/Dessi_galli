import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();

  const writeToUsForm = async () => {

    
    let formField = new FormData();
    formField.append("name", name);
    formField.append("email", email);
    formField.append("phone", phone);
    formField.append("desc", desc);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/contactpost/",
      data: formField
    }).then((response) => {
      console.log(formField);
      
    });

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'writeus', e.target, 'priyanshuparashar223@gmail.com')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <fooetr>
      <div class="footer">
        
        <div class="container-fluid">
          <div class="row">
            <div class=" col-md-12">
              <h2>
                <strong class="white"> Write to us</strong>
              </h2>
            </div>
           
            <div class="col-md-6">
              <form class="main_form">
               
                 
                    <input
                      class="form-control"
                      placeholder="Name"
                      type="text"
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                
                 
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                
                
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                 
                  
                    <textarea
                      class="textarea"
                      placeholder="Message"
                      type="text"
                      name="Message"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button class="send" onClick={writeToUsForm} >Send</button>
                  </div>
               
              </form>
            </div>
            <div class="col-md-6">
              <div class="img-box">
                <figure>
                  <img src="images/footerimg.jpg" alt="img" />
                </figure>
              </div>
            </div>
        </div>
       
          <div class="row">
            <div class="col-md-12">
              <div class="footer_logo">
                <a href="index.html">
                  <img
                    src="images/dgl.png"
                    alt="logo"
                    width="150px"
                    height="100px"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-12">
              <ul class="lik">
                <li class="active">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/about">About</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/blogss">Blog</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-12">
              <div class="new">
                <h3>Subscribe</h3>
                <form class="newtetter">
                  <input
                    class="tetter"
                    placeholder="Your email"
                    type="text"
                    name="Your email"
                  />
                  <button class="submit">Get Offers & Updates</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <p>© Desi Galli 2022 All Rights Reserved. Design by</p>
          </div>
        </div>
      </div>
    </fooetr>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    let response = await fetch("http://localhost:8000/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div class="blog">
      <br>
      </br>

      <div class="parallax"></div>

      <div class="col-lg-12  text-center">
        <h1>INDIAN STREET FOOD</h1>
        </div>

      <div class="parallax"></div>
     
      <div class="">
       
          <div class="title">
            <i>
              <img src="https://img.icons8.com/material/100/ffffff/restaurant-on-site.png" />

            </i>
            <h2>Our Blogs</h2>
            <p>when looking at its layout. The point of using Lorem</p>
          </div>
       
      </div>
      <br>
      </br>
      <div class="container">
      
        <div class="row">
          {blogs.map((blog) => (
            <div
              class=" col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom"
              key={blog.id}
            >
              <div class="blog_box">
                <div class="blog_img_box">
                  <figure>
                    <img src={"http://localhost:8000/api" + blog.img} alt="#" />
                    {/* <span>{blog.datandtime}</span> */}
                  </figure>
                </div>
                <h3>{blog.title}</h3>
                <p className="text">{blog.desc}</p>
                <br></br>
                <p><Link class="button btn btn-outline-light" to="blogss">Read More....</Link>
                  </p>
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Blog;

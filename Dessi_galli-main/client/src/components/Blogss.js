
import React, { useState, useEffect } from "react";

const Blogss = () => {

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
        <div>
           
         
           
            <div class="parallax"></div>

            <div class="col-lg-12  text-center">
                <h1>INDIAN STREET FOOD</h1>
            </div>

            <div class="parallax"></div>
           
           
         
            <div class=""  >
                <div class="">
                    <div class=" title text-center">
                        
                            <h2>Our Blogs</h2>

                      

                      

                    </div>
                </div>

            </div>
            <div class="blog">
                <div class="container">
                  
                    {blogs.map((blog) => (
                    <div class="row">
                        <div class="col-md-12 mar_bottom" key={blog.id}>
                            <div class="blog_box row">
                                    <div class="blog_img_box col-md-5">
                                        <figure>
                                            <img src={"http://localhost:8000/api" + blog.img} alt="#" />
                                           
                                        </figure>
                                    
                                </div>
                                <div class="col-md-7">
                                        <h3>{blog.title}</h3>
                                        <p>{blog.desc}</p>
                                </div>
                            </div>
                            </div>
                           
                                
                        </div>
                        
                             ))}



                   
                   
                       
                     
  </div>
</div>

                
               
                </div>

  );
};

export default Blogss;
import React, { useContext } from "react";

import Blogss from "../components/Blogss";
import Top from "../components/Top"
import Footer from "../components/Footer";


const Blogs = () => {
    
    return (
        <div>
            <Top />
            <br></br>
           
            <Blogss/>
            <br>
            </br>
            <Footer/>
        </div>
    );
};

export default Blogs;

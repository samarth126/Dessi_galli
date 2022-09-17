import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import ReservationForm from "../components/ReservationForm";
import ReservationTable from "../components/ReservationTable";
import Header from "../components/Header"
import Updates from "../components/UpdateForm"
import AdminBlog from "../components/AdminBlog";

const Admin = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access)
      }
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <div>
      <Header/>
     
     
      <div class="yellow_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>Admin Panel</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReservationTable />
    
      <br />
      <div class="container">
        <div class="row">
          <div class=" col-md-6">
            <h1 class="text-center">TopDish</h1>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Dish Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title"/>
                    </div>



                <div class="form-group">
                  <label for="exampleFormControlFile1">Blog image</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                  <button type="submit" class="btn btn-dark btn-lg">SUBMIT</button>
                </form>
          </div>
          
              <div class=" col-md-6">
               <Updates/>
              </div>
        </div>
      </div>
      <br>
      </br>
      <br>
        </br>
    
      
        </div>
       
       
  );
};

export default Admin;

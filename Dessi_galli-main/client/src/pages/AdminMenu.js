import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Header from '../components/Header'
import axios from "axios";
import MenuCRUD from "../components/MenuCRUD";

const AdminMenu = () => {
    // let [notes, setNotes] = useState([]);
    let { authTokens, logoutUser } = useContext(AuthContext);

   

    const [dishname, setdishname] = useState(null);
    const [price, setprice] = useState(null);
    const [dishImage, setdishImage] = useState(null);

    const addNewPost = async () => {
        let formField = new FormData();
        formField.append("dishname", dishname);
        formField.append("price", price);
        formField.append("dishImage", dishImage);

        if (dishImage !== null) {
            formField.append("dishImage", dishImage);
        }

        await axios({
            method: "post",
            url: "http://localhost:8000/api/createmenu/",
            data: formField,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + String(authTokens.access)
            }
        }).then((response) => {
            console.log(response.data);
            // let data = await response.json();

            if (response.status === 200) {
                
            } else if (response.statusText === "Unauthorized") {
                logoutUser();
            }
        });
        
    };


  return (
      <div>
          <Header />
          <div class="container">
              <br></br>
              <div class=" col-md-12">
                  <h1 class="text-center">MENU</h1>
                  <form>
                      <div class="form-group">
                          <label for="exampleFormControlInput1">DISH NAME</label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleFormControlInput1"
                              placeholder="name"
                              value={dishname}
                              onChange={(e) => setdishname(e.target.value)}
                          />
                      </div>

                      <div class="form-group">
                          <label for="exampleFormControlTextarea1">
                              PRICE
                          </label>
                          <input
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              type="number"
                              rows="3"
                              value={price}
                              onChange={(e) => setprice(e.target.value)}
                          ></input>
                      </div>
                      <div class="form-group">
                          <label for="exampleFormControlFile1">DISH IMAGE</label>
                          <input
                              type="file"
                              class="form-control-file"
                              id="exampleFormControlFile1"
                              onChange={(e) => setdishImage(e.target.files[0])}
                          />
                      </div>
                      <button
                          type="submit"
                          class="btn btn-dark btn-lg"
                          onClick={addNewPost}
                      >
                          SUBMIT
                      </button>
                  </form>
              </div>

          </div>
          <MenuCRUD/>
      </div >
  )
}

export default AdminMenu
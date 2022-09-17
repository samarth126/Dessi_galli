import React, { useState } from "react";
import Footer from "../components/Footer";
import Top from "../components/Top";

import axios from "axios";

const Reservation = () => {
  const [name, setName] = useState();
  const [count, setCount] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [datef, setDatef] = useState();
  const [time, setTime] = useState();

  const addNewReservations = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("count", count);
    formField.append("phone", phone);
    formField.append("email", email);
    formField.append("datef", datef);
    formField.append("time", time);

    await axios({
      method: "post",
      url: "http://localhost:8000/api/reservation/",
      data: formField
    }).then((response) => {
      console.log(formField);
    });
  };

  return (
    <div class="ress">
      <Top />
    
      <div id="fh5co-reservation-form" class="fh5co-section">
        <div class="">
          <div class="">
            <div class=" fh5co-heading animate-box">
              <h2>Reservation</h2>
             
            </div>

            <div class="container">
              
              <form action="#" id="form-wrap">
                
                <div class="row">
                  <div class="col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    
                 
                    <div class="col-md-6">
                      <label for="name">Contact No</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    
                  
                  </div>
                
                  <div class="row form-group">
                    <div class="col-md-12">
                      <label for="name">email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                

                <div class="row form-group">
                  <div class="col-md-6">
                    <label for="many">How Many People</label>
                    <select
                      name="many"
                      id="many"
                      class="form-control custom_select"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    >
                      <option value="0">--Select--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class=" form-group">
                    <div class="col-md-12">
                      <label for="taskdatetime">Date</label>
                      <input
                        class="form-control"
                        type="date"
                        id="date"
                        value={datef}
                        // data-date-format='yyyy-mm-dd'
                        onChange={(e) => setDatef(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class=" form-group">
                    <div class="col-md-12">
                      <label for="taskdatetime">Time</label>
                      <input
                        class="form-control"
                        type="time"
                        id="date"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <button
                      type="submit"
                      class="btn btn-outline-light"
                      onClick={addNewReservations}
                    >
                      SUBMIT
                    </button>
                   
                  </div>
                </div>
              </form>
            </div>
         
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Reservation;

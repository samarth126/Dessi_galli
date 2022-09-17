import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const ContactForm = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("  http://localhost:8000/api/contactget/", {
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
 <div >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">CONTACT/QUERY</h1>
            <table class="table table-bordered table-dark">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
               
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr>
                  <td>{note.id}</td>
                  < td>{note.name}</td>
                  <td> {note.phone}</td>
                  <td>{note.email}</td>
                 
                  <td>{note.desc}</td>
                </tr>

              ))}

            </tbody>
          </table>


        </div>
        </div>
      </div>
      </div>
    
   
          
          
    
  )
}

export default ContactForm
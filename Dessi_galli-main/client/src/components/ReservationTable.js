
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const ReservationTable = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://localhost:8000/api/reservationGet/", {
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
    
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center">Reservations</h3>
            <table class=" table table-bordered table-dark">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody>
                {notes.reverse().map((note) => (
                <tr>
                    <td>{note.id}</td>
                   < td>{note.name}</td>
                    <td> {note.phone}</td>
                    <td>{note.email}</td>
                    <td>{note.time}</td>
                    <td>{note.datef}</td>
                    <td>{note.count}</td>
                  </tr>
                  
                ))}
              
              </tbody>
            </table>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationTable;

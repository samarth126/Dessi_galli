import React, { useState, useEffect, useContext, } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import {  useHistory, } from 'react-router';
import { Link } from 'react-router-dom';

const AdminBlog = () => {
    let [notes, setNotes] = useState([]);
    const history = useHistory();
    
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
    const deleteUser = async (id) => {
        let u = "http://localhost:8000/api/delete/" + id
      
        await axios.delete(u)
        window.location.reload();
      
        
    }


  return (
      <div><div class="container">
          <div class="row">
              <div class="col-12">
            
                  <table class="table table-image">
                      <thead>
                          <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Image</th>
                              <th scope="col">Title</th>
                              <th scope="col">Desc</th>
                              <th scope="col">Date</th>
                              <th scope="col">Option</th>
                          </tr>
                      </thead>
                      <tbody>
                           {notes.map((note) => (
                          <tr>
                                   <th scope="row">{note.id}</th>
                              <td class="w-25">
                                       <img src={"http://localhost:8000/api" + note.img} class="img-fluid img-thumbnail" alt="Sheep"/>
                              </td>
                                   <td>{note.title}</td>
                                   <td>{note.desc}</td>
                              <td>913</td>
                                   {/* <td><button type="button" class="btn btn-danger" onClick={() => deleteUser(note.id)}>Delete</button></td> */}
                                   <td> <Link className="btn btn-danger" onClick={() => deleteUser(note.id)}>Delete</Link></td>
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

    export default AdminBlog;
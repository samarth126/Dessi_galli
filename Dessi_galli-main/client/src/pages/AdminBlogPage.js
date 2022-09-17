import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Header from "../components/Header"
import AdminBlog from '../components/AdminBlog'
import ReservationForm from '../components/ReservationForm'

export const AdminBlogPage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Header/>

      AdminBlog
      <ReservationForm />
      <br>
      </br>
      <AdminBlog />
    </div>
  )
}
export default AdminBlogPage;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    // <div>
    //   <Link to="/">Home</Link>
    //   <span> | </span>
    //   <Link to="/desi">Desi</Link>
    //   <span> | </span>
    //   <Link to="/about">About</Link>
    //   <span> | </span>
    //   {user ? (
    //     <p onClick={logoutUser}>Logout</p>
    //   ) : (
    //     <Link to="/login">Login</Link>
    //   )}
    //   <br />
    //   <hr />
    //   <Link to="/about">about</Link>
    //   <br />
    //   <Link to="/menu">menu</Link>
    //   <h1>hello </h1>

    //   {user && <p>Hello {user.username}</p>}
    // </div>

    <>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        
        <h3><Link class="navbar-brand" to="/admin">Desi Galli</Link></h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <h3><Link class="nav-link" to="/about">About</Link></h3>
             
            </li>
            <li class="nav-item">
              <h3><Link class="nav-link" to="/adminblog">BLOGS</Link></h3>
            </li>
            <li class="nav-item">
              <h3><Link class="nav-link" to="/adminmenu">MENU</Link></h3>
            </li>
            <li class="nav-item">
              <h3><Link class="nav-link" to="/admincontact">Contact Forms</Link></h3>
            </li>
            {user ? (
              <li class="nav-item">
                {/* <p onClick={logoutUser}>Logout</p> */}
                <h3><Link class="nav-link" onClick={logoutUser}>Logout</Link></h3>
              </li>
      ) : (
        <Link to="/login">Login</Link>
      )}
            <li class="nav-item">
             
            </li>
          </ul>
       
  </div>
</nav>
      </>
  );
};

export default Header;

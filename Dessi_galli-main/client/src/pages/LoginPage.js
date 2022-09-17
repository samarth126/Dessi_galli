import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Top from "../components/Top";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <>
      <Top />
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>  <br>
      </br>
      <br>
      </br>
    <div class="container">
     
     
      {/* <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form> */}
      <div class="row">
        <div class="col d-flex justify-content-center">
     
      
      <div class=" card ">
        <div class="card-header text-center">
          <h1>Desi galli ADMIN LOGIN</h1>
        </div>
        <div class="card-body">
              <form onSubmit={loginUser}>
            <div class="form-group">
              <label for="exampleInputEmail1">User Name</label>
                  <input type="text" name="username" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Username"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" class="form-control"  placeholder="Password"/>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        
        </div>
        <div class="card-footer text-muted">
        desigalli@2022
        </div>
        </div>
        </div>
      

      </div>
      </div>
    </>
  );
};

export default LoginPage;

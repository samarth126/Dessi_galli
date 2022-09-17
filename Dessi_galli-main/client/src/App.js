import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";


import HomePage from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Desi from "./pages/Desi";
import About from "./pages/About";
import Menu from "./pages/Menu";

import Blogs from "./pages/Blogss";
import Reservation from "./pages/Reservation"
import Gallery from "./pages/Gallery"
import Admin from "./pages/Admin";
import AdminBlogPage from "./pages/AdminBlogPage";

import Location  from "./pages/Location";
import AdminContact from "./pages/AdminContact";
import AdminMenu from "./pages/AdminMenu";

function App() {
  return (
    <div className="App">
    
      <Router>
        
        <Route component={Menu} path="/menu" />
        <Route component={Reservation} path="/reservation" />
        <Route component={Gallery} path="/gallery" />
        <Route component={Location} path="/locate"/>
        {/* <Navbar /> */}
        <AuthProvider>
          {/* <Header /> */}
          <Route component={LoginPage} path="/login" />
         
          <PrivateRoute component={Admin} path="/admin" exact />
          <PrivateRoute component={AdminBlogPage} path="/adminblog" exact />
          <PrivateRoute component={AdminContact} path="/admincontact" exact />
          <PrivateRoute component={AdminMenu} path="/adminmenu" exact/>

          
          

        </AuthProvider>
     
        <Route component={Desi} path="/" exact />
       
        <Route component={Blogs} path="/blogss" />
        <Route render={() => <About/>} path="/about" />
       
        
      </Router>
     
    </div>
  );
}

export default App;

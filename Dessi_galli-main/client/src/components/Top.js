import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbarr.css";
import { IconContext } from "react-icons";

function Top() {
  const [sidebar, setSidebar] = useState(false);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    events();
  }, []);
  

  let events = async () => {
    let response = await fetch("http://localhost:8000/api/eventget", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    console.log(data);
    setEvent(data);
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div >
     
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items " onClick={showSidebar}>
          <li className="navbar-toggle">
            <i class="fa fa-arrow-left"></i>
            <Link to="#" className="menu-bars"></Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <header>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="full">
                <Link class="logo" to="">
                  <img
                    src="images/dlg.png"
                    height="260px"
                    width="240px"
                    alt="#"
                  />
                </Link>
              </div>
            </div>
            <div class="col-md-9">
              <div class="full">
                <div class="right_header_info">
                  <ul>
                    <li class="dinone">
                      Contact Us :
                      <img
                        style={{ marginRight: 15, marginLeft: 15 }}
                        src={"images/phone_icon.png"}
                        alt="#"
                      />
                      <a href="tel:8319400650">+47 333 78 901</a>
                    </li>
                    <li class="dinone">
                      <img
                        style={{ marginRight: 15 }}
                        src={"./images/mail_icon.png"}
                        alt="#"
                      />
                      <a href="mailto:desigallibcn@gmail.com?subject = Feedback&body = Message">
                        desigalli@gmail.com
                      </a>
                    </li>
                    <li class="dinone">
                      <img
                        style={{
                          marginRight: 15,
                          height: 21,
                          position: "relative",
                          top: -2
                        }}
                        src="images/location_icon.png"
                        alt="#"
                      />
                      <Link to="locate">Barcelona, Spain</Link>
                    </li>

                    <li class="button_user">
                      <Link
                        class="button"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Events <i class="fa-solid fa-bell"></i>
                      </Link>

                      {/* <a href="" class="button active" data-toggle="modal" data-target="#myModal">Events <i class="fa-solid fa-bell"></i></a> */}

                      <Link class="button" to="reservation">
                        Reservation <i class="fa-solid fa-mug-hot"></i>
                      </Link>
                    </li>

                    <li>
                      <IconContext.Provider value={{ color: "white" }}>
                        <div className="">
                          <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                          </Link>
                        </div>
                      </IconContext.Provider>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="card">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="card-body text-center">
              {" "}
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-cook-gastronomy-kiranshastry-gradient-kiranshastry.png" />
              <h4>Events at Desi Galli </h4>
              {event.map((events) => (
                <h1 class="black">"{events.update}"</h1>
              ))}
              <Link class="btn btn-outline-dark" to="/reservation">
                Book A table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;

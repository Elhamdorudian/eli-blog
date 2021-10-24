import { Link } from "react-router-dom";
import logo from "../images/logo4.jpg";
import "./Navbar.scss";
import {Button} from "react-bootstrap";
import { useState } from "react";
import DropDown from "./DropDown";

const NavbarTest = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    console.log(e.target.children);
    setActive(!isActive);
  };

  return (
    <nav
      className={`navbar navbar-expand-md ${isActive ? "" : "open"}`}
      id="navbar"
    >
      <Link className="navbar-brand" to="/eli-blog">
        <img src={logo} alt="logo" />
        <p>Learning is fun</p>
      </Link>
      <Button
        className="navbar-toggler nav-item-one"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
        aria-expanded="false"
        onClick={handleToggle}
      >
        <div className={`animated-icon ${isActive ? "" : "open"}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <div className="collapse navbar-collapse" id="menu">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/eli-blog">
            HOME
          </Link>
          <div className="nav-item nav-link dropdown-link"> <DropDown/> </div>

          <Link className="nav-item nav-link" to="/about">
            ABOUT
          </Link>
          <Link className="nav-item nav-link" to="/comments">
            CONTACT
          </Link>
         
        </div>
      </div>

    </nav>
  );
};

export default NavbarTest;

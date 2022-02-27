import React from "react";
import { Button } from "../../pages/Home/home";
import Logo from "../../assets/logo.png";
import { Links, NavContainer } from "./Navbar.js";
import { Link } from "react-router-dom";
import { Row } from "../../pages/page";
const Navbar = () => {
  return (
    <NavContainer>
      <Row>
        <img src={Logo} alt="logo" />
        <div />
        <Link to="/">
          <Links>Home</Links>
        </Link>
        <Link to="/stories">
          <Links>Stories</Links>
        </Link>
        <Link to="/discussion">
          <Links>Discussion</Links>
        </Link>
        <Link to="/test">
          <Links>Prognosis possibility for doctors</Links>
        </Link>{" "}
      </Row>
    </NavContainer>
  );
};

export default Navbar;

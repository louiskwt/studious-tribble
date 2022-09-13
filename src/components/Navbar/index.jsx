import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          StarChaser
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to={"/register"} className="nav-link">
              加入我們
            </Link>
            <Link to={"/"} className="nav-link">
              最新個案
            </Link>
            <Link to={"/login"} className="nav-link">
              登入
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default index;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const index = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">StarChaser</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">加入我們</Nav.Link>
            <Nav.Link href="#link">最新個案</Nav.Link>
            <Nav.Link href="#link">登入</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default index;

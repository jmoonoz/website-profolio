import React from "react";
import "../style/styles.scss";
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar id='nav' fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Joel Munoz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

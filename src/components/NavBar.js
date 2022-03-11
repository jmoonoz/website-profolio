import React from "react";
import "../style/styles.scss";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar id='nav' fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#Banner">Joel Munoz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target="#basic-navbar-nav" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Moonoz">Moonoz</Nav.Link>
              <Nav.Link href="#Email">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavBar;

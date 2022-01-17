import React from "react";
import MoonozTag from '../img/MoonozTagwht.svg';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  Container
} from "reactstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" container light fixed="top">
        <NavbarBrand href="#Banner">
          <img className="nav-tag" src={MoonozTag} alt='Moonoz tag graffiti' />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Projects">Projects</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown inNavbar nav>
              
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

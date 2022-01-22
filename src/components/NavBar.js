import React from "react";
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
      <Navbar expand="md" container light fixed="top" fluid='true'>

        <NavbarBrand className="me-auto" href="#Banner">
          Joel Muñoz
        </NavbarBrand>
        <NavbarToggler className="me-2" data-target="#navbarSupportedContent" onClick={function noRefCheck(){}}/>
        <Collapse navbar id="navbarSupportedContent">
          <Container>

            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#About">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Skills">
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#Projects">
                  Projects
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>

              </UncontrolledDropdown>
            </Nav>
          </Container>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import cl from "./index.module.scss";

const NavMenuDeskTop: React.FC = () => {
  return (
    <Navbar bg="dark" className={cl.nav} expand="lg">
      <Container>
        {/* Brand section */}
        <NavLink className="navbar-brand" to="/">
          Monster
        </NavLink>
        {/* Brand section */}

        {/* Toggler section */}
        <Navbar.Toggle
          className={cl.toggler}
          aria-controls="basic-navbar-nav"
        />
        {/* Toggler section */}

        {/* Collapse section */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Links section */}
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/test">
              Not Found
            </NavLink>
            {/* Links section */}

            {/* Dropdown section */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Dropdown section */}
          </Nav>
        </Navbar.Collapse>
        {/* Collapse section */}
      </Container>
    </Navbar>
  );
};

const NavMenuDesk: React.FC = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NavMenuDeskTop />,
        document.getElementById("navbar")!
      )}
    </React.Fragment>
  );
};

export default NavMenuDesk;

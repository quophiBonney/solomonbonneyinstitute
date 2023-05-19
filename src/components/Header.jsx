import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import Logo from "../../src/images/logo.png";
import {Link} from "react-router-dom";
import MainCSS from "../App.module.css";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      id={MainCSS.navbar}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            className="img-fluid"
            alt="BOS logo"
            id={MainCSS.navLogo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/web-development-course"
              className={MainCSS.menuLink}
            >
              Web Development BootCamp
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/wordpress-development-course"
              className={MainCSS.menuLink}
            >
              WordPress Development BootCamp
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/content-writing-course"
              className={MainCSS.menuLink}
            >
              Content Writing BootCamp
            </Nav.Link>
          </Nav>
          <Nav>
            <a
              href="https://wa.me/+233596840018"
              className="btn btn-lg"
              id={MainCSS.btnBookSession}
            >
              Book A Session
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

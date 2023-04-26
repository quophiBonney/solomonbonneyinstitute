import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Logo from "../../src/images/logo.png";
import WebDevelopment from "../pages/WebDevelopment";
import ContentWriting from "../pages/ContentWriting";
import WordPressDevelopment from "../pages/WordPressDevelopment";
import MainCSS from "../App.module.css";
function Header() {
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="xl"
        className="fixed-top"
        id={MainCSS.navbar}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              className="logo img-fluid img-responsive"
              alt="logo"
              id={MainCSS.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
      <div>
        <Routes>
          <Route path="/web-development-course" element={<WebDevelopment />} />
          <Route
            path="/wordpress-development-course"
            element={<WordPressDevelopment />}
          />
          <Route path="/content-writing-course" element={<ContentWriting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;

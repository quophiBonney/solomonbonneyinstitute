import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
function Footer() {
  return (
    <Container fluid className={MainCSS.footer}>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={3} xl={3} className="px-2 mt-3 text-center">
          <h3 className={MainCSS.footerLogo}>SKBI</h3>
          <small className={MainCSS.fadeText}>
            Copyright &copy; 2023 All rights reserved
          </small>
        </Col>
        <Col sm={12} md={6} lg={3} xl={3} className="px-2 mt-3">
          <p id={MainCSS.footerText} className="mt-3 mb-3">
            <span className={MainCSS.fadeText}>Open Hours:</span>
            <br />
            Monday - Friday 9am - 5pm GMT
          </p>
        </Col>
        <Col sm={12} md={6} lg={3} xl={3} className="px-2 mt-3">
          <p id={MainCSS.footerText} className="mt-3 mb-3">
            <span className={MainCSS.fadeText}>Phone:</span> +233596840018
            <br />
            <span className={MainCSS.fadeText}>Email:</span>
            &nbsp;solomonbonney27@gmail.com
          </p>
        </Col>
        <Col sm={12} md={6} lg={3} xl={3} className="px-2 mt-3">
          <p id={MainCSS.footerText} className="mt-3 mb-3">
            <span className={MainCSS.fadeText}>Address:</span> B/A 72,
            Kasoa-Bawjiase
            <br />
            Near Perez Chapel International
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

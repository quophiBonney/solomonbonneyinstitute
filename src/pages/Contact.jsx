import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
import Worried from "../../src/images/teamwork.jpeg";
function Contact() {
  return (
    <Container fluid className="mt-5 mb-3" id={MainCSS.contactContainer}>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={6} xl={6} className="mt-5 px-2 text-center">
          <p className="text-secondary mt-5">
            Need some assistance or answers?
          </p>
          <h5 id={MainCSS.talk}>React Out To Us So We Can Begin Talking</h5>
          <a
            href="https://wa.me/+233596840018"
            className="btn btn-md mt-3"
            id={MainCSS.btnContact}
          >
            Contact Us
          </a>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className="mt-5 px-2 text-center card"
          id={MainCSS.worriedContainer}
        >
          <img
            src={Worried}
            alt="worried png"
            className="img-fluid img-responsive"
            id={MainCSS.worriedImg}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

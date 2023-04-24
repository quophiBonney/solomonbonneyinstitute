import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
function Redefine() {
  return (
    <Container fluid className={MainCSS.claim}>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className="text-center mt-5 mb-4 px-2">
            <p className="text-dark text-uppercase">
              learn in-demand tech skills to tap those untapped opportunities in
              the world.
            </p>
            <h3 className="text-dark" id={MainCSS.help}>
              Quickly kick-start to take your Computer Programming skills to the
              highest level.
            </h3>
            <a href="" className="btn btn-lg" id={MainCSS.btnJoinGroup}>
              Enroll Now
            </a>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="mt-5 mb-5 text-center px-2"
          >
            <h3 className="text-dark" id={MainCSS.benefit}>
              Affordable
            </h3>
            <p className="text-dark">
              Get value for your money. Join the best and affordable bootcamp
              sessions.
            </p>
            <h3 className="text-dark mt-5" id={MainCSS.benefit}>
              Flexible & Engaging
            </h3>
            <p className="text-dark">
              Join virtual classes and get access to resources for self-paced
              revision.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="mt-5 mb-5 text-center px-2"
          >
            <h3 className="text-dark" id={MainCSS.benefit}>
              Affordable
            </h3>
            <p className="text-dark">
              Get value for your money. Join the best and affordable bootcamp
              sessions.
            </p>
            <h3 className="text-dark mt-5" id={MainCSS.benefit}>
              Flexible & Engaging
            </h3>
            <p className="text-dark">
              Join virtual classes and get access to resources for self-paced
              revision.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="mt-5 mb-5 text-center">
            <h3 className="text-dark" id={MainCSS.benefit}>
              Future Proof
            </h3>
            <p className="text-dark">
              Focused on high paying, in-demand fields of today and beyond.
            </p>
            <h3 className="text-dark mt-5" id={MainCSS.benefit}>
              Real World Projects
            </h3>
            <p className="text-dark">
              Acquire experience while you learn by building real world
              projects.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Redefine;

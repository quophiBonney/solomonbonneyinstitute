import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
function Home() {
  return (
    <Container fluid className={MainCSS.banner}>
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            className="text-center"
            id={MainCSS.missionContainer}
          >
            <p className="mt-5" id={MainCSS.yellowText}>
              own a tech skill
            </p>
            <h1 className="text-light text-uppercase" id={MainCSS.mission}>
              Transformational Coding Institute
            </h1>
            <p className="text-light">
              Acquire practical experience and become empowered for tech jobs to
              brighten your future.
            </p>
            <a href="" className="btn btn-lg" id={MainCSS.btnJoinGroup}>
              Enroll Now
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;

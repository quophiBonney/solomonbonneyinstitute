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
            className="text-center px-2"
            id={MainCSS.missionContainer}
          >
            <p className="mt-5" id={MainCSS.yellowText}>
              own a tech skill
            </p>
            <h1
              className="text-light text-uppercase"
              id={MainCSS.mission}
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Transformational Coding Institute
            </h1>
            <p className="text-light">
              Acquire practical experience and become empowered for tech jobs to
              brighten your future.
            </p>
            <a
              href="https://chat.whatsapp.com/BhaHJyB8WfY3KYdxYKpzjd"
              className="btn btn-lg"
              id={MainCSS.btnJoinGroup}
            >
              Enroll Now
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;

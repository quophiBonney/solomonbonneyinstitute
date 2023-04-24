import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
function Skill() {
  return (
    <Container fluid>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} xl={12} className="mt-5 px-4">
            <h4 className="text-center" id={MainCSS.redefineTitle}>
              Redefine Your Possible
            </h4>
            <p className="text-dark">
              A significant problem in tech education is most bootcamps requires
              students to have a significant background in coding just to join a
              program. However, Solomon Bonney Institute gives anyone with zero
              coding experience and knowledge the opportunity to become the
              best.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skill;

import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
import Coding from "../../src/images/coding.jpg";
import Bg1 from "../../src/images/bg1.jpg";
import Side from "../../src/images/side.jpg";
import LazyLoad from "react-lazy-load";
function Claim() {
  return (
    <Container fluid id={MainCSS.claimContainer}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} className="px-2 mt-5">
            <div className="mt-2" id={MainCSS.claimBorder}></div>
            <h3>
              Claim your place in the tech world with our concise, practical and
              impactful lessons.
            </h3>
            <LazyLoad>
              <img
                src={Coding}
                alt="Coding"
                className="img-fluid img-responsive"
                id={MainCSS.codingImg}
                loading="lazy"
                data-aos="slide-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              />
            </LazyLoad>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="px-2 mt-5"
            id={MainCSS.claimSecColumn}
            data-aos="slide-left"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <div className="d-flex">
              <img
                src={Side}
                alt="Coding"
                className="col-xs-3 col-sm-6 col-lg-6 img-fluid img-responsive m-2"
                id={MainCSS.codingTwo}
                loading="lazy"
              />
              <img
                src={Bg1}
                alt="Coding"
                className="col-xs-3 col-sm-6 col-lg-6 img-fluid img-responsive m-2"
                id={MainCSS.codingTwo}
                loading="lazy"
              />
            </div>
            <p>
              Claim your place in the tech world with our concise, practical and
              impactful lessons.
            </p>
            <a
              href="https://wa.me/+233596840018"
              className="btn btn-lg mb-5"
              id={MainCSS.btnEnroll}
            >
              Enroll Now
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Claim;

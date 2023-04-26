import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";
import Remote from "../../src/images/remotejob.jpg";
import Laptop from "../../src/images/laptop-min.png";
import Content from "../../src/images/contentwriting-min.jpg";
import LazyLoad from "react-lazy-load";
function Programs() {
  return (
    <Container fluid className={MainCSS.programsBg}>
      <Container>
        <Row>
          <div className="col-12">
            <p className="mt-3" id={MainCSS.programsCaption}>
              Learn with the industry's best
            </p>
            <h3 className="text-uppercase" id={MainCSS.ourPrograms}>
              OUR PROGRAMS
            </h3>
          </div>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="px-4 mt-5"
            id={MainCSS.singleProgram}
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <LazyLoad>
              <img
                src={Laptop}
                alt="Laptop"
                className="img-fluid img-responsive"
                id={MainCSS.programsImg}
              />
            </LazyLoad>
            <div className={MainCSS.textGroup}>
              <h4 className="text-uppercase py-3" id={MainCSS.programName}>
                Full-stack Web Development
              </h4>
              <p className="text-light">
                Master all the modern technologies and languages needed to build
                fully functioning web applications.
              </p>
              <a
                href="https://wa.me/+233596840018"
                className="btn btn-md"
                id={MainCSS.btnLearn}
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="px-4 mt-5"
            id={MainCSS.singleProgram}
            data-aos="slide-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <LazyLoad>
              <img
                src={Content}
                alt="Laptop"
                className="img-fluid img-responsive"
                id={MainCSS.programsImg}
              />
            </LazyLoad>
            <div className={MainCSS.textGroup}>
              <h4 className="text-uppercase py-3" id={MainCSS.programName}>
                Content Writing Lessons
              </h4>
              <p className="text-light">
                Discover and explore in-depth studies on content writing and
                tools to help you be great at it.
              </p>
              <a
                href="https://wa.me/+233596840018"
                className="btn btn-md"
                id={MainCSS.btnLearn}
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            className="px-4 mt-5"
            id={MainCSS.singleProgram}
            data-aos="slide-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <LazyLoad>
              <img
                src={Remote}
                alt="Laptop"
                className="img-fluid img-responsive"
                id={MainCSS.programsImg}
              />
            </LazyLoad>
            <div className={MainCSS.textGroup}>
              <h4 className="text-uppercase py-3" id={MainCSS.programName}>
                Remote Jobs Preparation Class
              </h4>
              <p className="text-light">
                Receive all the experience, guidance and assistance to land a
                tech job remotely around the world.
              </p>
              <a
                href="https://wa.me/+233596840018"
                className="btn btn-md"
                id={MainCSS.btnLearn}
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Programs;

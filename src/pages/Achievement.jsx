import React, {useState, useEffect} from "react";
import {Container, Col, Row} from "react-bootstrap";
import MainCSS from "../App.module.css";

function Achievement() {
  const [experience, setExperience] = useState(0);
  const [course, setCourse] = useState(0);
  const [student, setStudent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setExperience(experience => {
        if (experience < 10) {
          return experience + 1;
        } else {
          clearInterval(interval);
          return experience;
        }
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCourse(course => {
        if (course < 50) {
          return course + 1;
        } else {
          clearInterval(interval);
          return course;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudent(student => {
        if (student < 500) {
          return student + 1;
        } else {
          clearInterval(interval);
          return student;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container fluid id={MainCSS.achievement}>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={12} className="text-center mt-5 px-2">
            <h3 className="text-light text-uppercase py-5" id={MainCSS.help}>
              We Have What It Takes To Help You
            </h3>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="mb-5 mt-5 text-center px-2"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <center>
              <div className={MainCSS.numberBorder}></div>
            </center>
            <h3 className="text-light py-2" id={MainCSS.number}>
              {experience}+
            </h3>
            <h4 className="text-uppercase text-light" id={MainCSS.numberTitle}>
              years industry experience
            </h4>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="mb-5 mt-5 text-center px-2"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <center>
              <div className={MainCSS.numberBorder}></div>
            </center>
            <h3 className="text-light py-2" id={MainCSS.number}>
              {course}
            </h3>
            <h4 className="text-uppercase text-light" id={MainCSS.numberTitle}>
              programming bootcamps held
            </h4>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="mb-5 mt-5 text-center px-2"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-delay="500"
          >
            <center>
              <div className={MainCSS.numberBorder}></div>
            </center>
            <h3 className="text-light py-2" id={MainCSS.number}>
              {student}+
            </h3>
            <h4 className="text-uppercase text-light" id={MainCSS.numberTitle}>
              number of enrolled students
            </h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievement;

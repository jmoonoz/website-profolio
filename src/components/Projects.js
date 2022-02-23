import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MoonozNetflix from "../img/MoonozNetflix.png";

const Projects = () => {
  return (

    <Container id="Projects" fluid>
      <Row>
        {/* row */}
        <Col xs={1} ></Col>
        <Col xs={10}>
          <h6 className="projects-title">Projects</h6>
        </Col>
        <Col xs={1} ></Col>
        {/* row */}
        <Col xs={1} ></Col>
        <Col xs={10}>
          <h4 className="aboutMe-Name">Check out some of my works</h4>
        </Col>
        <Col xs={1}></Col>
        {/* row */}
        <Col sm={6}>
          <a href="https://netflix-clone-8caf8.web.app/" >
            <img src={MoonozNetflix} alt="netflix clone" className="project-img" />
          </a>
        </Col>
        <Col sm={6} >

          <a href="https://netflix-clone-8caf8.web.app/" >
            <img src={MoonozNetflix} alt="netflix clone" className="project-img" />
          </a>
        </Col>

      </Row>

    </Container>
  )
};

export default Projects;

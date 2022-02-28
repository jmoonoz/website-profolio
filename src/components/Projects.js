import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MoonozNetflix from "../img/MoonozNetflix.png";
import ProjectCard from "./ProjectCard";
import "../style/projects.scss";

const Projects = () => {
  return (

    <Container id="Projects" >
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
          <h4 className="project-header">Few things I've Coded</h4>
        </Col>
        <Col xs={1}></Col>
        {/* row */}
        <Col xs={1} md={1}></Col>
        <Col sm={6} md={5}>
          <ProjectCard
            projectImage={MoonozNetflix}
            name="Netflix Clone"
            description="Clone reconstuction Netflix home page coded with React. "
            demo="https://netflix-clone-8caf8.web.app/"
            tools="React JS  Html  SCSS  React-Bootstrap  Netlify Github TMDB-API"
            git="https://github.com/jmoonoz/Netflix-Clone"
          />
        </Col>
        <Col sm={6} md={5}>
          <ProjectCard
            projectImage={MoonozNetflix}
            name="Netflix Clone"
            description="Clone reconstuction Netflix home page coded with React."
            demo="https://netflix-clone-8caf8.web.app/"
            tools="React JS Html SCSS React-Bootstrap Netlify Github"
            git="https://github.com/jmoonoz/Netflix-Clone"
          />
        </Col>
        <Col sm={1} md={1}></Col>
        <Col sm={12}>
          <p className="project-footer">
            Take a look at some of my other works on my <a className="git-link" href="https://github.com/jmoonoz">Git hub</a>
          </p>
        </Col>

      </Row>

    </Container>
  )
};

export default Projects;

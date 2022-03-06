import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MoonozNetflix from "../img/MoonozNetflix.png";
import Spotify from "../img/Spotify.png";
import ProjectCard from "./ProjectCard";
import portfolio from "../img/portfolioV1.png";
import "../style/projects.scss";

const Projects = () => {
  return (

    <Container id="Projects" >
      <Row>
        {/* row */}
        <Col xs={1} ></Col>
        <Col xs={10}>
          <h4 className="projects-title">Projects</h4>
        </Col>
        <Col xs={1} ></Col>
        {/* row */}
        <Col xs={1} ></Col>
        <Col xs={10}>
          <h2 className="project-header">Few things I've Coded</h2>
        </Col>
        <Col xs={1}></Col>
        {/* row */}
        {/* <Col xs={1} md={1}></Col> */}
        <Col sm={12} md={4}>
          <ProjectCard
            projectImage={MoonozNetflix}
            name="Netflix Clone"
            description="Clone replication of Netflix home page coded with React. With real time data gathered and functionality like trailer preview"
            demo="https://netflix-clone-8caf8.web.app/"
            tools="React JS  Html  SCSS  React-Bootstrap  Netlify Github TMDB-API"
            git="https://github.com/jmoonoz/Netflix-Clone"
          />
        </Col>
        <Col sm={12} md={4}>
          <ProjectCard
            projectImage={Spotify}
            name="Spotify Clone"
            description="Clone recreation of Spotify with React. Utalizing Spotify own API for functions like searching, playing and reading Lyrics"
            // demo="https://netflix-clone-8caf8.web.app/"
            tools="React JS Html SCSS React-Bootstrap Github Spotify-API "
            git="https://github.com/jmoonoz/Spotify-clone"
          />
        </Col>
        <Col sm={12} md={4}>
          <ProjectCard
            projectImage={portfolio}
            name="Personal Website V1"
            description="Early prototypes of my portfolio website. First time creating a React project that would be deployed"
            demo="https://dreamy-mccarthy-16d697.netlify.app/"
            tools="React JS Html CSS React-Bootstrap Github CSS-Animasion"
            git="https://github.com/jmoonoz/moonozProfile"
          />
        </Col>
       
        <Col sm={12}>
          <p className="project-footer">
            Take a look at some of my other works on my <a className="word-link" href="https://github.com/jmoonoz">Git hub</a>
          </p>
        </Col>

      </Row>

    </Container>
  )
};

export default Projects;

import React from "react";
import "../style/skills.scss";
import { Container, Col, Img, Row } from "react-bootstrap";
import HiddenMouseketeer from "../img/HiddenMouseketeer.png";
import College from "../img/joelCollege.jpg";

const Skills = () => {
  return (
    <Container id='Skills' >
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <h2 className="skills-title">About me</h2>
        </Col>
        <Col xs={2}></Col>

      </Row>
      <Row>
        {/*  */}
        <Col sm={2}></Col>
        <Col sm={5}>
          <Container className="intro-text">
            <p>
              Hey! My name is Joel Muñoz and I'm a Front-End Developer. I graduated California State University East Bay (CSUEB) with a B.S. In COmputer Science, B.A. Psychology and minor in Sociology.
            </p>
            <p>Here are some of the technologies I've coded with:</p>
            <ul className="Skill-list">
              <li>Javascrip (ES6+)</li>
              <li>React JS</li>
              <li>Node.JS</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>C++</li>
            </ul>
          </Container>
        </Col>


        {/* frame image */}
        <Col sm={4} >
          <Container>
            <div className="moonoz-college frame">
              <img src={HiddenMouseketeer} className="hidden-Mouseketeer" alt="Hidden Mouseketeer" />
            </div>
          </Container>
        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p className="selfDescription" >Accomplished. Artistic. Deticated.</p>
        </Col>
        <Col sm={12}>
          <div className="aboutMe-foot">
            Learn more by checking out my {" "}
            <a href="https://www.instagram.com/moonozdisenoz/?hl=en" className="word-link">Instagram</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "react-bootstrap";
import "../style/about.scss";
import { IoSchool } from "react-icons/io5";
import { IoIosBrush } from "react-icons/io";
import College from "../img/joelCollege.jpg";
import IpadTag from '../img/ipadDesign.jpg';
import HiddenMouseketeer from "../img/HiddenMouseketeer.png";

const About = () => {
  return (
    <Container id="About" data-aos="fade-right"  >
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <h2 className="skills-title">About me</h2>
        </Col>
        <Col lg={2}></Col>

      </Row>
      <Row>
        {/*  */}
        <Col lg={2}></Col>
        <Col lg={5}>
          <Container className="intro-text">
            <p>
              Hey! My name is Joel Muñoz and I'm a Front-End Developer. I graduated California State University East Bay (CSUEB) with a B.S. In Computer Science, B.A. Psychology and minor in Sociology.
            </p>
            <p>
              I initially began my academic career in Psychology, but after receiving my B.A. I transitioned my focus into Computer Science. This is where I discovered how to code internet magic.
            </p>
            <p>
              Bringing it to today, my passion travels through my fingertips as I'm typing away at pixel perfect program. Specializing in designing with JavaScript along with React, Bootstrap and the essential HTML & CSS! My passion has also driven my curiosity to design 3d models with VRML and dive into Three.JS.
            </p>
            <p>
              Although I graduated school my curiosity for leanring new languages and techniques will never stop. I will continue learing and developing myself into a greater Front end Engineer.
            </p>
            <p>Here are some of the technologies I've coded with:</p>
            <ul className="skills-list">
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
        <Col lg={4} >
          <Container className="moonoz-cont">
            <div className="moonoz-college frame">
              <img src={HiddenMouseketeer} className="hidden-Mouseketeer" alt="Hidden Mouseketeer" />
            </div>
          </Container>
        </Col>
        <Col lg={1}></Col>
        <Col className="about-foot" sm={12}>
          <p className="sec-footer">
            Wana know more about my expertise? check out my <a className="word-link" href="https://www.linkedin.com/in/moonoz/">Linkedin</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

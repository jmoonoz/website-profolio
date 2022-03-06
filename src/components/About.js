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
    <Container id="About" >
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
              Hey! My name is Joel Muñoz and I'm a Front-End Developer. I graduated California State University East Bay (CSUEB) with a B.S. In Computer Science, B.A. Psychology and minor in Sociology.
            </p>
            <p>
              I initially began my academic career in Psychology, but after receiving my B.A. I transitioned my focus into Computer science. This is where I discovered how to code internet magic.
            </p>
            <p>
              Bringing it to today, my passion travels though my fingertips as I typing away at pixel perfect program. Specializing in designing with JavaScript along with React, Bootstrap and the essential HTML & CSS! My passion has also driven my curiosity to design 3d models with VRML and dive into Three.JS.
            </p>
            <p>
              Although i graduated school my curiosity for leanring new languages and techniques will never stop. I will contonue learing and developing myself into a greater Front end Engineer.
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
        <Col sm={4} >
          <Container className="moonoz-cont">
            <div className="moonoz-college frame">
              <img src={HiddenMouseketeer} className="hidden-Mouseketeer" alt="Hidden Mouseketeer" />
            </div>
          </Container>
        </Col>
        <Col sm={1}></Col>
      </Row>
      {/* <Row>
        <Col sm={12} className="selfDescription" >
          <p >Accomplished. Artistic. Deticated.</p>
        </Col>
        <Col sm={12}>
          <div className="aboutMe-foot">
            Learn more by checking out my {" "}
            <a href="https://www.instagram.com/moonozdisenoz/?hl=en" className="word-link">Instagram</a>
          </div>
        </Col>
      </Row> */}
    </Container>
  );
};

export default About;

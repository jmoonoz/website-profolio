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
          <h6 className="aboutMe-title">About me</h6>
        </Col>
        <Col xs={2}></Col>

      </Row>
      <Row>
        {/*  */}
        <Col sm={2}>1</Col>
        <Col sm={4}>
          <Container className="">
            <p>
              Hey! My name is Joel Muñoz and I'm a Front-End Developer. I graduated California State University East Bay (CSUEB) with a B.S. In COmputer Science, B.A. Psychology and minor in Sociology.
            </p>
            <p>Here are some of the technologies I've coded with:</p>
            <ul className="Skill-list">
              <li>Javascrip</li>
              <li>Javascrip</li>
              <li>Javascrip</li>
              <li>Javascrip</li>
              <li>Javascrip</li>
              <li>Javascrip</li>
            </ul>
          </Container>
        </Col>


        {/* frame image */}
        <Col sm={5} >
          <Container>
            <div className="moonoz-college frame">
              <img src={HiddenMouseketeer} className="hidden-Mouseketeer" alt="Hidden Mouseketeer" />
            </div>
          </Container>
        </Col>
        <Col sm={1}>1</Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p className="selfDescription" >Accomplished. Artistic. Deticated.</p>
        </Col>
        <Col sm={12}>
          <div className="aboutMe-foot">
            Learn more by checking out my {" "}
            <a href="https://www.instagram.com/moonozdisenoz/?hl=en">Instagram</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

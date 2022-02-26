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
    <Container id="About" fluid>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <h6 className="aboutMe-title">About me</h6>
        </Col>
        <Col xs={1}></Col>
        <Col sm={12}>
          <h1 className="aboutMe-Name">Mooñoz Mundo</h1>
        </Col>
      </Row>
      <Row>
        {/*  */}
        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-shadow">
              <Card.Body>
                <Card.Title >
                  <div className="about-title" >
                    Education
                  </div>
                </Card.Title>
                <Card.Text>
                  2019 California State University East Bay (CSUEB) Alumni with a B.S. in Computer Science, B.A. in
                  Psychology and a minor in Sociology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-shadow" >
              <Card.Body>
                <Card.Title>
                  <div className="about-title">
                    Design
                  </div>
                </Card.Title>
                <Card.Text>
                  Freelance Graphics designer, filling the world with art one design at a time. Skilled in desinging with Procreate, Affinity Designer and Photoshop.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        {/* blank col */}
        <Col sm={4} className="d-xs-none">
        </Col>

        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-shadow" >
              <Card.Body>
                <Card.Title>
                  <div className="about-title ">
                    Animation
                  </div>
                </Card.Title>
                <Card.Text>
                  Filled with admiration for the works of Disney and Pixar animated films has inspired by intrest in developing my own 2D animated shorts. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>


        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-shadow" >
              <Card.Body>
                <Card.Title>
                  <div className="about-title">
                    Hidden Mouseketeer
                  </div>
                </Card.Title>
                <Card.Text>
                  Freelance Graphics designer, filling the world with art one design at a time. I look to further my art skills into animation.
                </Card.Text>
              </Card.Body>
            </Card>
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

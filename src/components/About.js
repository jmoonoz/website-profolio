import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { IoSchool } from "react-icons/io5";
import { IoIosBrush } from "react-icons/io";
import College from "../img/joelCollege.jpg";

const About = () => {
  return (
    <Container id="About">
      <Row>
        <Col sm={12}>
          <h6 className="aboutMe-title">About me</h6>
        </Col>
        <Col sm={12}>
          <h4 className="aboutMe-Name">Mooñoz Mundo</h4>
        </Col>
      </Row>
      <Row>
        {/*  */}
        <Col sm={4}>
          <Container>
            <Card>
              <CardBody>
                <CardTitle className="aboutMe-Name" >
                  <h4 >
                    Education
                  </h4>
                </CardTitle>
                <CardText>
                  Graduated CSUEB in 2019 with a B.S in Computer Science, B.A in
                  Psychology and a minor in Sociology
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        <Col sm={4}>
          <Container>
            <Card>
              <CardBody>
                <CardTitle>
                  <h4>
                    Design
                  </h4>
                </CardTitle>
                <CardText>Born with natural artist skills i have developed a deep love for graphic designs and illustrating in 2d. I look to further my arti skills into animation.</CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        <Col sm={4}>
          <Container>
            <img className="moonoz-college" src={College} alt="Joel Munoz college" />
          </Container>
        </Col>
        <Col className="selfDescription" sm={12}>
          <p>Accomplished. Artistic. Deticated.</p>
        </Col>
      </Row>
      <h4>
        Look into my Mundo through my{" "}
        <a href="https://www.instagram.com/moonozdisenoz/?hl=en">Instagram</a>
      </h4>
    </Container>
  );
};

export default About;

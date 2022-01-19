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
      <Col xs={1}></Col>
        <Col xs={10}>
          <h6 className="aboutMe-title">About me</h6>
        </Col>
        <Col xs={1}></Col>
        <Col sm={12}>
          <h4 className="aboutMe-Name">Mooñoz Mundo</h4>
        </Col>
      </Row>
      <Row>
        {/*  */}
        <Col sm={4}>
          <Container>
            <Card className="yellow-change">
              <CardBody>
                <CardTitle className="about-title" >
                  <div className="red-text">
                    Education
                  </div>
                </CardTitle>
                <CardText>
                  Graduated CSUEB with a B.S in Computer Science, B.A in
                  Psychology and a minor in Sociology.
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        <Col sm={4}>
          <Container>
            <Card className="blue-change" > 
              <CardBody>
                <CardTitle>
                  <div className="about-title blue-text">
                    Graphics
                  </div>
                </CardTitle>
                <CardText>
                  Freelance Graphics designer. I look to further my arti skills into animation.
                </CardText>
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
        <Col sm={12}>
          <div className="aboutMe-foot">
            Look into my Mundo through my{" "}
            <a href="https://www.instagram.com/moonozdisenoz/?hl=en">Instagram</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

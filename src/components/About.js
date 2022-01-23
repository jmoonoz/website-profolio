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
import IpadTag from '../img/ipadDesign.jpg';

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
            <Card className="red-change hvr-grow-rotate-left">
              <CardBody>
                <CardTitle >
                  <div className="about-title" >
                    Education
                  </div>
                </CardTitle>
                <CardText>
                  Graduated CSUEB with a B.S. in Computer Science, B.A. in
                  Psychology and a minor in Sociology.
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        
        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-rotate-right" > 
              <CardBody>
                <CardTitle>
                  <div className="about-title ">
                    Graphics
                  </div>
                </CardTitle>
                <CardText>
                  Freelance Graphics designer, filling the world with art one design at a time. I look to further my art skills into animation.
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        <Col sm={4} className="d-xs-none">
          
        </Col>
        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-rotate-right" > 
              <CardBody>
                <CardTitle>
                  <div className="about-title ">
                    Graphics
                  </div>
                </CardTitle>
                <CardText>
                  Freelance Graphics designer, filling the world with art one design at a time. I look to further my art skills into animation.
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        <Col sm={4}>
          <Container>
            <Card className="blue-change hvr-grow-rotate-right" > 
              <CardBody>
                <CardTitle>
                  <div className="about-title ">
                    Graphics
                  </div>
                </CardTitle>
                <CardText>
                  Freelance Graphics designer, filling the world with art one design at a time. I look to further my art skills into animation.
                </CardText>
              </CardBody>
            </Card>
          </Container>
        </Col>
        
        <Col sm={4} >
          <Container>
            <div className="moonoz-college frame">
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

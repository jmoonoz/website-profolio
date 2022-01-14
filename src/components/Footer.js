import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <Container id="Footer" fluid>
      <Row>
        <Col>
          <p >
            ©{year} Joel Munoz
          </p>
        </Col>
        <Col>
          <p>Front-End Developer</p>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/moonoz/" >
            <BsLinkedin />
          </a>
          <BsGithub />
          <BsInstagram />

        </Col>
      </Row>
    </Container>
  )
}
export default Footer;

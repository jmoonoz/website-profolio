import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <Container id="Footer" fluid>
      <Container>
        <Row>
          <Col xs={12}>
            <p >
              Designed & Built by Joel Muñoz ©{year}
            </p>
          </Col>
         
        </Row>
      </Container>
    </Container>
  )
}
export default Footer;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <Container id="Footer" fluid>
      <Row>
        <Col xs={4}>
          <p >
            ©{year} Joel Muñoz
          </p>
        </Col>
        <Col xs={2}>
          <p>Front-End Developer</p>
        </Col>
        <Col xs={6} >
          <Container className="footer-icons">

            <a className="lkd-icon" href="https://www.linkedin.com/in/moonoz/" >
              <BsLinkedin className='icon-item' />
            </a>
            <a className="git-icon" href="https://github.com/jmoonoz">
              <BsGithub className='icon-item' />
            </a>

            <a className="ig-icon" href="https://www.instagram.com/moonozdisenoz/?hl=en">
              <BsInstagram className='icon-item' />
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer;

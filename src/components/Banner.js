import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style/banner.scss";
import { BsLinkedin, BsGithub, BsInstagram, BsArrowDownCircle } from 'react-icons/bs';

const Banner = () => {
  return (
    <Container id="Banner" className="banner banner-Mobile" fluid>
      <Container>
        <Row className="banner-text">
          <Col md={1}></Col>
          <Col md={5}>
            <h1 className="name" >Joel Muñoz</h1>
            <h2 className="job-title" >Front-End Developer</h2>
            <Container className="banner-icons">
              <a className="link-icon" href="https://www.linkedin.com/in/moonoz/" >
                <BsLinkedin className='icon-item' />
              </a>
              <a className="link-icon" href="https://github.com/jmoonoz">
                <BsGithub className='icon-item' />
              </a>

              <a className="link-icon" href="https://www.instagram.com/moonozdisenoz/?hl=en">
                <BsInstagram className='icon-item' />
              </a>
            </Container>
            <a href="#Quote" >
              <BsArrowDownCircle className="icon-item banner-arrow" />
            </a>

          </Col>
          <Col md={6}></Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Banner;

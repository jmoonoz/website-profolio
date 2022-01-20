import React from "react";
import { Col, Container, Row } from "reactstrap";
import Moonoz from "../img/moonozPic.png";
import { BsLinkedin, BsGithub, BsInstagram, BsArrowDownCircle } from 'react-icons/bs';

const Banner = () => {
  return (
    <Container id="Banner" className="banner gradient-background banner-Mobile" fluid>
      {/* Image */}
      {/* <Container>
        <Row>
          <Col>
            <div className="moonoz-Img">
              <img src={Moonoz} alt="head shot of Joel Munoz Moonoz" />
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row className="banner-text">
          {/* Name and one row */}
          <Col xs={1} sm={1} ></Col>
          <Col xs={10} sm={5}>
            <h1 className="name" >Joel Muñoz</h1>
          </Col>
          <Col xs={1} sm={12}></Col>
          {/* Job title and second row */}
          <Col xs={1} sm={1} ></Col>
          <Col xs={10} sm={5}>
            <h2 className="job-title" >Front-End Developer</h2>
          </Col>
          <Col xs={1} sm={12}></Col>
          {/* city and third row*/}
          <Col xs={1} sm={1} ></Col>
          <Col xs={10} sm={5}>
            <h3 className="city" >Hayward, California</h3>
          </Col>
          <Col xs={1} sm={12}></Col>
          {/* link icons and fourth row */}
          <Col xs={1} sm={1} ></Col>
          <Col xs={10} sm={5}>
            <Container className="banner-icons">
              <a className="lkd-icon" href="https://www.linkedin.com/in/moonoz/" >
                <BsLinkedin className='icon-item' />
              </a>
              <a className="git-icon" href="https://github.com/jmoonoz">
                <BsGithub className='icon-item ' />
              </a>

              <a className="ig-icon" href="https://www.instagram.com/moonozdisenoz/?hl=en">
                <BsInstagram className='icon-item ' />
              </a>
            </Container>

          </Col>
          <Col xs={1} sm={6}></Col>
          {/* down arrow and fith row */}
          <Col xs={1} sm={1} ></Col>
          <Col xs={10} sm={5}>
            <a href="#Quote" >
              <BsArrowDownCircle className="icon-item banner-arrow" />

            </a>

          </Col>
          <Col xs={1} sm={6}></Col>
        </Row>

      </Container>
    </Container>
  );
};

export default Banner;

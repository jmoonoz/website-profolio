import React from "react";
import { Col, Container, Row } from "reactstrap";
import Moonoz from "../img/moonozPic.png";
import { BsLinkedin, BsGithub, BsInstagram, BsArrowDownCircle } from 'react-icons/bs';

const Banner = () => {
  return (
    <Container id="Banner" className="gradient-background banner-Mobile" fluid>
      {/* Image */}
      <Container>
        <Row>
          <Col>
            <div className="moonoz-Img">
              <img src={Moonoz} alt="head shot of Joel Munoz Moonoz" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="banner-text">
          {/* Name */}
          <Col sm={12}>
            <h1 className="name" >Joel Muñoz</h1>
          </Col>
          {/* Job title */}
          <Col sm={12}>
            <h2 className="job-title" >Front-End Developer</h2>
          </Col>
          {/* city */}
          <Col sm={12}>
            <h3 className="city" >Hayward, California</h3>
          </Col>
          {/* link icons */}
          <Col sm={12}>
            <Container className="banner-icons">
              <a  >
                <BsLinkedin className='icon-item icon-one' href="https://www.linkedin.com/in/moonoz/" />
              </a>
              <a >
                <BsGithub className='icon-item' />
              </a>

              <a >
                <BsInstagram className='icon-item' />
              </a>
            </Container>

          </Col>
          <Col sm={12}>
            <a href="#Quote"> 
              <BsArrowDownCircle className="icon-item" />

            </a>

          </Col>
        </Row>
        
      </Container>
    </Container>
  );
};

export default Banner;

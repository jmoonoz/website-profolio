import React from "react";
import { Col, Container, Row } from "reactstrap";
import Moonoz from "../img/moonozPic.png";

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
        <Row>
          <Col>
            <h1>Joel Muñoz</h1>
          </Col>
          <Col sm={12}>
            <h2>Front-End Developer</h2>
          </Col>
          <Col sm={12}>
            <h3>Hayward, Ca</h3>
          </Col>
          <Col sm={12}>
            <h2>
              'const <a href="#About">Welcome</a> = () =>'
            </h2>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;

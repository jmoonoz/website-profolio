import React from "react";
import "../style/moonoz.scss";
import { Button, Container, Col, Img, Row } from "react-bootstrap";
import HiddenMouseketeer from "../img/HiddenMouseketeer.png";
import College from "../img/joelCollege.jpg";
import MoonozIpad from "../img/ipadDesign.jpg";

const Moonoz = () => {
  return (
    <Container id='Moonoz' >
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>
          <h2 className="skills-title">Who is...Moonoz?</h2>
        </Col>
        <Col xs={2}></Col>

      </Row>
      <Row>
        {/*  */}
        <Col sm={2}></Col>
        <Col sm={5}>
          <Container className="intro-text">
            <p>
              Moonoz is the creativity side of me that takes over whenever I design. I have always been passion about drawing and designing ever since I was young enough to grab a pencil and paper. My creativity was deeply inspired by the works of Walt Disney and Pixar Movies.
            </p>
            <p>
              In 2018 I bought an Ipad Pro and since then my life. Since then I learn the structure of digital designing and have even produced my works into stickers and pins.
            </p>
            <p>

            </p>
            <p>Here are some of the programs I've designed with:</p>
            <ul className="skills-list">
              <li>Procreate</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Affinity Desinger</li>
            </ul>
          </Container>
        </Col>
        {/* frame image */}
        <Col sm={4} className="moonoz-design"  >

          {/* <Container fluid> */}
            <img src={MoonozIpad} className="moonoz-Ipad fluid" alt="Moonoz Ipad" />
            {/* <div className="ipad-outline"></div> */}
          {/* </Container> */}

        </Col>
        <Col sm={1}></Col>
      </Row>
      <Row className="moonoz-footer">
        {/* <Col sm={12} className="selfDescription" >
          <p >Accomplished. Artistic. Deticated.</p>
        </Col> */}
        <Col sm={12}>
          <div className="sec-footer">
            Learn more by checking out my {" "}
            <a href="https://www.instagram.com/moonozdisenoz/?hl=en" className="word-link">Instagram</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Moonoz;

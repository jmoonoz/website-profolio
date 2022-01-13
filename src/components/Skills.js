import React from "react";
import { Container, Col, Row } from "reactstrap";
import { BsCode } from "react-icons/bs";

const Skills = () => {
  return (
    <Container>
      <Row>
        {/* skills */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec"></Container>
        </Col>
        {/* languages */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec lang-sec">
            <div className="pink-icon skill-title">
              <BsCode /> Language
            </div>
            <div className="skill-text">
              I have a full knowledge of building responsive languages such as
              HTML, CSS, React, Bootstrap
            </div>
          </Container>
        </Col>
        {/* Tools */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec lang-sec">
            <div className="skill-title">
              <BsCode /> Tools
            </div>
            <div className="skill-text">
              Articulated in using Visual Studios, Xcode, Terminal and Chrome
              Developer tools
            </div>
          </Container>
        </Col>

        {/*Graphic designer*/}
        <Col sm={5}></Col>
      </Row>
    </Container>
  );
};

export default Skills;

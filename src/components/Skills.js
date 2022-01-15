import React from "react";
import { Container, Col, Row } from "reactstrap";
import { BsCode } from "react-icons/bs";
import { MdDraw } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <Container id='Skills'>
      <Row>
        {/* skills */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec">
            <div className="skill-title">

            </div>
            <div className="skill-text">

            </div>
          </Container>
        </Col>
        {/* languages */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec lang-sec">
            <div className="pink-icon skill-title">
              <BsCode /> Language
            </div>
            <div className="skill-text">
              Experienced in coding with HTML, CSS and Javascript. Created Responsive applications with Bootstrap and React.
            </div>
          </Container>
        </Col>
        {/* Tools */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec lang-sec">
            <div className="skill-title">
              <FaLaptopCode /> Tools
            </div>
            <div className="skill-text">
              Articulated in using Visual Studios, Xcode, Terminal and Chrome
              Developer tools
            </div>
          </Container>
        </Col>

        {/*Graphic designer*/}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec">

            <div className="skill-title graphics-title">
              <MdDraw /> Graphic Designer
            </div>
            <div className="skill-text">

            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

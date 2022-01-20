import React from "react";
import { Container, Col, Row } from "reactstrap";
import { BsCode } from "react-icons/bs";
import { MdDraw } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import {GrCertificate} from "react-icons/gr";

const Skills = () => {
  return (
    <Container id='Skills'>
      <Row>
        {/* skills */}
        <Col xs={1}></Col>
        <Col xs={6}>My expertise</Col>
        <Col xs={5}></Col>
        <Col xs={1}></Col>
        <Col xs={6}>the most creative intuitive workmate</Col>
        <Col xs={5}></Col>

        {/* languages */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec lang-sec">
            <div className="skill-title">
              <BsCode /> Front-End Dev.
            </div>
            <div className="skill-text">
              Experienced with HTML, CSS and Javascript; as well as creating responsive frame works with Bootstrap and React.
            </div>
          </Container>
        </Col>
        {/* Tools */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec ">
            <div className="skill-title">
              <FaLaptopCode /> Tools
            </div>
            <div className="skill-text">
              Proficient in using Visual Studios, Xcode, Terminal and Chrome
              Developer tools.
            </div>
          </Container>
        </Col>

        {/*Graphic designer*/}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec">

            <div className="graphics-title">
              <MdDraw /> Graphic Designer
            </div>
            <div className="skill-text">
              Talented Freelance graphics designer with 3+ years experience creating digital artwork in Afinity desinger, Procreate and Photoshop.
            </div>
          </Container>
        </Col>
        {/* certificates */}
        <Col className="skills-space" sm={5}>
          <Container className="card-sec">

            <div className="certificate-title">
              <GrCertificate /> Certificates
            </div>
            <div className="skill-text">
              <a href="https://www.udemy.com/certificate/UC-7cea0eba-da1b-44ef-8f01-221b3f702138/"><p>Complete Wb Development Bootcamp by Dr.Angela Yu</p></a>
              <a href="https://ibb.co/nLtRBXY"><p>Ultimate JavaScript Mastery Series by Code with Mosh</p></a>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

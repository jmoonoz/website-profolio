import React from "react";
import { Container, Col, Img, Row } from "reactstrap";
import { BsCode } from "react-icons/bs";
import { MdDraw } from 'react-icons/md';
import Moonoz from "../img/moonozPic.png";
import { FaLaptopCode } from 'react-icons/fa';
import { GrCertificate } from "react-icons/gr";

const Skills = () => {
  return (
    <Container id='Skills'>
      <Row>
        {/* skills */}
        <Col xs={1}></Col>
        <Col xs={6}><h6 className="skills-head">My Expertise</h6></Col>
        <Col xs={5}></Col>
        <Col xs={1}></Col>
        <Col xs={5}>
          <h3 className="skill-intro">A highly deticated creative team player</h3>
          <div className="moonoz-Img">
            <img src={Moonoz} className="img-fluid Moonoz" alt="head shot of Joel Munoz Moonoz" />
            {/* <img /> */}
          </div>
        </Col>
        <Col sm={6}>
          {/* languages */}
          <Container className="card-sec lang-sec">
            <div className="skill-title front-title">
              <BsCode className='icon-item front-icon' /> Front-End Dev.
            </div>
            <div className="skill-text">
              Experienced with HTML, CSS and Javascript; as well as creating responsive frame works with Bootstrap and React.
            </div>
          </Container>
          {/* Tools */}
          <Container className="card-sec ">
            <div className="skill-title tool-title">
              <FaLaptopCode className='icon-item' /> Tools
            </div>
            <div className="skill-text">
              Proficient in Visual Studios, Xcode, Terminal and Chrome
              Developer tools.
            </div>
          </Container>
          {/* Graphic design */}
          <Container className="card-sec">
            <div className="graphics-title">
              <MdDraw className='icon-item' /> Graphic Designer
            </div>
            <div className="skill-text">
              Talented Freelance graphics designer with 3+ years experience creating digital artwork in Afinity desinger, Procreate and Photoshop.
            </div>
          </Container>
          {/* Certificates */}
          <Container className="card-sec">
            <div className="certificate-title">
              <GrCertificate className='icon-item cert-icon' /> Certificates
            </div>
            <div className="skill-text">
              <a href="https://www.udemy.com/certificate/UC-7cea0eba-da1b-44ef-8f01-221b3f702138/"><p>Complete Wb Development Bootcamp by Dr.Angela Yu</p></a>
              <a href="https://ibb.co/nLtRBXY"><p>Ultimate JavaScript Mastery Series by Code with Mosh</p></a>
            </div>
          </Container>
        </Col>
        {/* <Col xs={5} ></Col>
        <Col xs={2} sm={1}></Col> */}
        <Col xs={5} sm={5}>

        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

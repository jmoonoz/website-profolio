import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "react-bootstrap";
import "../style/about.scss";
import { IoSchool } from "react-icons/io5";
import { IoIosBrush } from "react-icons/io";
import College from "../img/joelCollege.jpg";
import IpadTag from '../img/ipadDesign.jpg';
import HiddenMouseketeer from "../img/HiddenMouseketeer.png";

const About = () => {
  return (
    <Container id="About" >
      <Row>
        <Col xs={12} className="def-title">
          <h3>Delinquent Dreamer</h3>
          <h6> [dih-ling-kwuhnt dree-mer]</h6>
        </Col>
        <Col xs={1}></Col>
        <Col xs={11} className="text-def">
          <p>
            adjective
          </p>
          <p>
            "Person who refuses to belive its a crime to follow their dream"
          </p>


        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={10} className="about-header">
          <h2>
            Who is ...Moonoz?
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

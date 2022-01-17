import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";

const Quote = () => {
  return (
    <Container id="Quote" fluid>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="quote-text">
              Craft is what we are expected to know; art is the unexpected use of
              our craft
            </h2>
          </Col>
          <Col sm={12}>
            <p className="quote-auth">- Ed Catmull</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Quote;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";
import QuoteArray from './quotes';
import quoteArray from "./quotes";

const Quote = (props) => {
  // console.log(props.key[1]);
  return (
    <Container id="Quote" fluid>
      <Container>
        <Row>
          <Col sm={12}>
            {/* <h2 className="quote-text">
              Craft is what we are expected to know; art is the unexpected use of
              our craft
            </h2> */}
            {props.phrase}
          </Col>
          <Col sm={12}>
            <p className="quote-auth">- {props.person}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Quote;

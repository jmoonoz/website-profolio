import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/quote.scss";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";
import QuoteArray from './quotes';
import TextTransition, { presets } from "react-text-transition";




const Quote = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setNextIndex();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const setNextIndex = () => {
    if (index < QuoteArray, length - 1) {
      setIndex(previousVal => {
        if (previousVal < QuoteArray.length - 1) {
          return previousVal + 1;
        }
        return 0;
      });
    }
  }


  return (
    <Container id="Quote" fluid>
      <Container className="quote-row">
        <Row >

          <Col sm={12}>
            <h3 className="quote-text" >
              <TextTransition text={QuoteArray[index].quote} springConfig={presets.gentle} delay={400} />
            </h3>
          </Col>
          <Col sm={12}>
            <div className="quote-auth">
              <TextTransition text={QuoteArray[index].auth} springConfig={presets.gentle} delay={400} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );

};
export default Quote;

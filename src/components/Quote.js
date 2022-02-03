import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";
import QuoteArray from './quotes';
import TextTransition, { presets } from "react-text-transition";




const Quote = () => {
  const [index, setIndex] = useState(0);

  const quoteArray = [
    {
      id: 0,
      quote: "Craft is what we are expected to know; art is the unexpected use of our craft",
      auth: "- Ed Catmull"
    },
    {
      id: 1,
      quote: "I guess one person can make a difference",
      auth: "- Stan Lee"
    },
    {
      id: 2,
      quote: "Stargazing, See how can reach your farthest aspirations",
      auth: "- Capital Steez"
    },
    {
      id: 3,
      quote: "You got the making of greatness in you",
      auth: "- Captain John Silver"
    }
  ];


  useEffect(() => {
    let interval = setInterval(() => {
      setNextIndex();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const setNextIndex = () => {
    if (index < quoteArray, length - 1) {
      setIndex(previousVal => {
        if (previousVal < quoteArray.length - 1) {
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
            <TextTransition text={quoteArray[index].quote} springConfig={presets.gentle} />
            </h3>
          </Col>
          <Col sm={12}>


            <TextTransition className="quote-auth" text={quoteArray[index].auth} springConfig={presets.gentle} />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );

};
export default Quote;

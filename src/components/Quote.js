import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";
import QuoteArray from './quotes';

// console.log(QuoteArray.length);
// let intervalDuration = 2000,
//   currentIndex = 0,
//   arrayLength = QuoteArray.length;

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      quote: "",
      speaker: ""
    }
  }


  // setInterval(() => {
  //   if (currentIndex === arrayLength) {
  //     currentIndex = 0;
  //   } else {
  //     this.setState({
  //       key: QuoteArray[currentIndex].key,
  //       quote: QuoteArray[currentIndex].quote,
  //       speaker: QuoteArray[currentIndex].auth
  //     });
  //     currentIndex++;
  //   }

  // }, intervalDuration);

// componentDidMount() {

// }
render() {
  return (
    <Container id="Quote" fluid>
      <Container>
        <Row>

          <Col sm={12}>
            <h3 className="quote-text" >
              Craft is what we are expected to know; art is the unexpected use of our craft
              {/* {this.state.quote} */}
            </h3>
          </Col>
          <Col sm={12}>
            <p className="quote-auth">- Ed Catmull</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
};
export default Quote;

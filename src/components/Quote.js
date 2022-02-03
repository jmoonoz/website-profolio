import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaCode } from "react-icons/fa";
import { GoCode } from "react-icons/go";
import QuoteArray from './quotes';



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
    }
  ];
  const q = "";
  const a = "";

  // function textChange() {
  //   let i = 0;
  //   setInterval(() => {
  //     $('.quote-text').fadeOut(function () {
  //       $(this).html(quoteArray[i = (i + 1) % quoteArray.length].quote).fadeIn();
  //     });
  //     $('.quote-text').fadeOut(function () {
  //       $(this).html(quoteArray[i = (i + 1) % quoteArray.length].auth).fadeIn();
  //     });

  //   }, 3000)

  // }
  // textChange();


//  setInterval(() => {
//       if (index < quoteArray.length-1) {
//         setIndex(index + 1);
//       } else {
//         setIndex(0);
//       }
//     }, 3000);


  return (
    <Container id="Quote" fluid>
      <Container>
        <Row>

          <Col sm={12}>
            <h3 className="quote-text" >
              {quoteArray[index].quote}
              {/* Craft is what we are expected to know; art is the unexpected use of our craft */}
              {/* {this.state.quote} */}
            </h3>
          </Col>
          <Col sm={12}>

            <p className="quote-auth">{quoteArray[index].auth}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );

};
export default Quote;

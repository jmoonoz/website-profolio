import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

import "../style/email.scss";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const API_SER = process.env.REACT_APP_SERVICE_KEY;
const API_TEMP = process.env.REACT_APP_TEMPLATE_KEY;
const API_USER = process.env.REACT_APP_USER_KEY;
init(API_USER);


const Email = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.init(API_USER);

        console.log(process.env.NODE_ENV);

        emailjs.sendForm(
            API_SER,
            API_TEMP,
            e.target,
            API_USER
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    const redStar = <span>*</span>;

    return (
        <Container id="Email" fluid>
            <Row>
                <Col className="contact-header" sm={6}>
                    <h2 className="contact-text">
                        Send me a message!
                    </h2>
                </Col>
                {/* email form */}
                <Col sm={6}>
                    <Form ref={form} className="formInput" onSubmit={sendEmail} >
                        <Form.Group controlId="enterName">
                            <Form.Control type="text" placeholder="Name" name="name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email" name="email" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm ControlTextarea1">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write to Me!"
                                name="message"
                            />
                        </Form.Group>
                        <div className="button-align">
                            <Button type="submit" variant="danger" className="styleButton" value="Send" size="lg">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>

    );

};
export default Email;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import "../style/email.scss";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const API_SER = "service_whwcb36";
const API_TEMP = "template_t42zq95";
const API_USER = "user_E2y7AWBwmc6CuoPjIzgMV";
// init(API_USER);


const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.init(API_USER);

    emailjs.sendForm(API_SER, API_TEMP, form.current, API_USER)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };



    return (
        <Container id="Email" data-aos="fade-up" >
            <Row>
                <Col className="contact-header" lg={6}>
                <Container>
                    
                    <h2 className="contact-text">
                        Wana chat?
                    </h2>
                    <p>
                        Feel free to reach out to me with any question or request
                    </p>
                </Container>
                </Col>
                {/* email form */}
                <Col lg={5}>
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
                            <Button type="submit" variant="outline-danger" className="styleButton" value="Send" size="lg">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>

    );

};
export default Email;
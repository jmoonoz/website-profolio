import React from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const Email = () => {
    function sendEmail(e) {
        e.preventDefault();

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
    }

    const redStar = <span>*</span>;

    return (
        <Container id="Email" fluid>
            <Row>
                <Col sm={6}>
                    <h1>
                        Feel free contact me!
                    </h1>

                </Col>
                {/* email form */}
                <Col sm={6}>
                    <Form className="formInput" onSubmit={sendEmail}>
                        <Form.Group controlId="enterName">
                            <Form.Label>Name{redStar}</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email{redStar}</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" />
                        </Form.Group>
                        <Form.Group controlId="enterSubject">
                            <Form.Label>Subject{redStar}</Form.Label>
                            <Form.Control type="text" placeholder="Email Subject" name="subject" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm ControlTextarea1">
                            <Form.Label>Message{redStar}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write to Moon, add as much detail as you'd like"
                                name="message"
                            />
                        </Form.Group>
                        <Button type="submit" variant="danger" className="styleButton" value="Send" size="lg">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>

    );

};
export default Email;
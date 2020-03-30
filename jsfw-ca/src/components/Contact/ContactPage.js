import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import {Row, Col, Form, Button} from "react-bootstrap";
import "../../style/contactPage.scss";


const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, "this is not a valid first name")
        .required("First name is required"),
    lastName: yup
        .string()
        .min(2, "this is not a valid last name")
        .required("Last name is required"),
    email: yup
        .string()
        .email("Email is not a valid email, please make sure you entered correct")
        .required("Email is required"),
    message: yup
        .string()
        .min(10, "the message is to short, please enter a more descriptive message")
        .required("Please enter a message"),
});

function handleForm(event) {
    event.preventDefault();
    console.log("this worked");
    console.log(event);
    for (let item of event.target.elements) {
        console.log(item.name, item.value)
    }
}

export default function (props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    return (
        <main className={"pageWrapper"}>
            <h1>Contact Form</h1>
            <Form onSubmit={handleSubmit(handleForm)}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="firstName">First Name</Form.Label>
                            <Form.Control type="text" name="firstName" placeholder="first name" ref={register}/>
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="lastName">Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" placeholder="last name" ref={register}/>
                            {errors.lastName && <p>{errors.lastName.message}</p>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="example@example.com" ref={register}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control as="textarea" name="message" placeholder="please enter your message here"/>
                    {errors.message && <p>{errors.message.message}</p>}
                </Form.Group>
                <Button type="submit">Send</Button>
            </Form>
        </main>
    )
}
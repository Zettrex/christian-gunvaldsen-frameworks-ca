import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required"),
    lastName: yup
        .string()
        .required("Last name is required"),
    email: yup
        .string()
        .email("Email is not a valid email, please make sure you entered correct")
        .required("Email is required"),
    message: yup
        .string()
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
        <form onSubmit={handleSubmit(handleForm)}>
            <div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" placeholder="first name" ref={register}/>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" placeholder="last name" ref={register}/>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="example@example.com" ref={register}/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="please enter your message here"/>
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit">Send</button>
        </form>
    )
}
import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

export const RequestQuote = () => {
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validName || !validEmail) return; // Prevent submission if form is invalid

        emailjs
            .sendForm(
                "service_98es1g8",
                "template_7kq84qp",
                form.current,
                "user_b1sE1QHEdnbuzTIQ6wIH0"
            )
            .then(
                (result) => {
                    // Nothing to do here
                },
                (error) => {
                    console.error(error.text);
                }
            );
        resetForm();
    };

    useEffect(() => {
        setValidName(name.length > 0);
        setValidEmail(emailRegex.test(email));
    }, [name, email]);

    const handleChange = (e) => {
        // Probably would have been more concise to use an object for this but oh well..
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

    return (
        <div id="request">
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                        type="text"
                        className="form-control bg-light text-dark"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        className="form-control bg-light text-dark"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control bg-light text-dark"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control bg-light text-dark"
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Enter message"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success w-100 mt-1"
                    disabled={validName === false || validEmail === false}
                >
                    Submit
                </button>
                <button type="reset" className="btn btn-secondary w-100 mt-1">
                    Reset
                </button>
            </form>
        </div>
    );
};

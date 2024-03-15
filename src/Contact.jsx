import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import success_img from "./images/message_success.gif";

const ContactForm = () => {
    const [data, setdata] = useState({
        fname: "",
        email: "",
        phone: "",
        message: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setdata((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }

    const [state, handleSubmit] = useForm("xayrdwad");
    if (state.succeeded) {
        return (
            <>
            <div className="success text-center" id="success" >
                <h4 className="text-success">Message Sent Succefully</h4>
                <img src={success_img} alt="success_img" />
            </div>
        </>
        );
    }


    return (
        <>
            <div>
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container container-div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label" htmlFor="name">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter your FullName" />
                                <ValidationError
                                    prefix="Fullnmae"
                                    field="fullname"
                                    errors={state.errors}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone Number" />
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Messgae</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="col-12">
                                <button type="submit" class="btn btn-outline-primary" disabled={state.submitting}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function Contact() {
    return (
        <ContactForm /> 
    )
}

export default Contact;
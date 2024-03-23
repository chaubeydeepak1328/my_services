import React from "react";
import web from "../src/images/photo.jpg";
import Commom from "./Commom";

const About = () => {
    return (
        <>
            <section className="About_section">
            <Commom title="MERN Stack Developer" name="" imgsrc={web} visit="/contact" btname="Contact Now" content="Have a project in mind, or just want to say hello and I'll get back to you as soon as possible. Looking forward to connecting with you!" />
            </section>
        </>
    )
}

export default About;
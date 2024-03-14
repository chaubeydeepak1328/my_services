import React from "react";
import web from "../src/images/photo.jpg";
import Commom from "./Commom";

const About = () => {
    return (
        <>
            <Commom name="Welcome to About Page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    )
}

export default About;
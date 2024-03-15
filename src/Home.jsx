import React from "react";
import web from "../src/images/webtoon.gif";
import Commom from "./Commom";

const Home = () => {
    return (
        <>
           <Commom title="Grow Your business with " imgsrc={web} visit="/services" name="Deepak chaubey" btname=" Get Stated" content="We are the Team of Talentes developer Making websites" />
        </>
    )
}

export default Home;
import React from "react";
import web from "../src/images/webtoon.gif";
import Commom from "./Commom";

const Home = () => {
    return (
        <>
           <Commom name="Grow Your business with " imgsrc={web} visit="/services" btname=" Get Stated" />
        </>
    )
}

export default Home;
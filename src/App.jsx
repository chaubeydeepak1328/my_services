import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from "./Footer";



const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/About" Component={About} />
                <Route exact path="/Services" Component={Services} />
                <Route exact path="/Contact" Component={Contact} />
                <Route path="*" Component={Home} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
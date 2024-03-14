import React from "react";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-9 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>{props.name}<strong className="brand_name">Deepak chaubey</strong></h1>
                                    <h2 className="my-3">We are the Team of Talentes developer Making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-get-started ">{props.btname}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commom;
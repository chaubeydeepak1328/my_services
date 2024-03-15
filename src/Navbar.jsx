import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand"  to="/" >T-Squard</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-2">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" activeClassName='menu_active' exact to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" activeClassName='menu_active' exact to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" activeClassName='menu_active' exact to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" activeClassName='menu_active' exact to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
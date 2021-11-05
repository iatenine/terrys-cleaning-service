import React from "react";
// import ReactDOM from "react-dom";

function Navbar() {
    return (
        <nav className="container nav">
            <ul>
                <li>
                    <a href="#about nav-link">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#request">Request a Quote</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

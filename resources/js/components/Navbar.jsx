import React from "react";
// import ReactDOM from "react-dom";

function Navbar() {
    return (
        <nav className="container">
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Request a Quote</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

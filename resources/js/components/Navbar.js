import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
    return (
        <nav className="container">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

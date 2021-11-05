import React from "react";
import Navbar from "./Navbar";

export const Header = () => {
    return (
        <header>
            <h1
                style={{
                    display: "inline",
                }}
            >
                Terry's Maid Service
            </h1>
            <Navbar
                style={{
                    display: "inline",
                    float: "right",
                }}
            />
        </header>
    );
};

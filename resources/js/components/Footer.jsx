import React from "react";
import { Phone } from "./Phone";

export const Footer = () => {
    return (
        <footer>
            <span
                style={{
                    float: "left",
                }}
            >
                &copy; 2021 Terry's Maid Service
            </span>
            <span
                style={{
                    float: "right",
                }}
            >
                249 Ligustrum Ln #H103
                <br />
                Merritt Island, FL 32953
                <br />
                <Phone />
                <br />
                Operating Hours: Mon-Fri 9am-5pm
            </span>
        </footer>
    );
};

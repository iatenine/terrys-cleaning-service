import React from "react";

export const Services = () => {
    const services = [
        "Move-In/Move-Out",
        "Carpet Cleaning",
        "Tile Cleaning",
        "Cleaning",
    ];

    return (
        // List off services
        <div id="services" className="services">
            <h2>Services</h2>
            <ul>
                {services.map((service, index) => {
                    return (
                        <li key={index}>
                            <h3>{service}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

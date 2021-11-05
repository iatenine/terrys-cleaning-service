import React from "react";
import HeroImage from "../../../storage/app/public/pexels-pixabay-276724.jpg";

export const Hero = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "50vh",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <img
                src={HeroImage}
                alt="Hero"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
};

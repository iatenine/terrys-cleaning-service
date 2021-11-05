import React from "react";

export const About = () => {
    return (
        <div id="about">
            <hr />
            <div>
                Founded in 2003, Terry's Maid Service is one of the most trusted
                and reliable cleaning services in the area. Serving Merritt
                Island, Cocoa Beach and Cape Canaveral, Terry's Maid Service is
                locally owned and operated, providing high-quality
                move-in/move-out cleaning services. We'll take care of what was
                left behind so you can focus on what's ahead!
            </div>
            <div className="mt-2 text-center">
                <strong>
                    To get started with a free estimate, click{" "}
                    <a href="#request" className="text-light">
                        here
                    </a>{" "}
                    or call <phone>321-350-7360</phone> and ask for Terry
                </strong>
            </div>
            <hr />
        </div>
    );
};

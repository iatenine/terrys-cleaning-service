import React from "react";
import ReactDOM from "react-dom";
import { About } from "./About";
import { RequestQuote } from "./RequestQuote";
import { Services } from "./Services";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Header } from "./Header";

function Root() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <About />
            <Services />
            <RequestQuote />
            <Footer />
        </div>
    );
}

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

function Root() {
    return (
        <div className="container">
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            I'm an example component!ffdsf
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}

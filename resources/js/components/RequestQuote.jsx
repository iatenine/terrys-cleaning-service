import React from "react";

export const RequestQuote = () => {
    return (
        <div id="request">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Enter message"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                    Reset
                </button>
            </form>
        </div>
    );
};

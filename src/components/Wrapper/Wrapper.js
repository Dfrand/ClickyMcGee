import React from "react";
import "./Wrapper.css";

const   Wrapper = props => (
    <div className="row">
        <div className="wrapper">{props.children}</div>
        <div className="Why">What are you doing down here?! Go back up there and beat the High Score!</div>
    </div>
);

export default Wrapper;
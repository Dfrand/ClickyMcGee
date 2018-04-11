import React from "react";

const   Wrapper = props => (
    <div className="row">
        <div className="wrapper">{props.children}</div>
    </div>
);

export default Wrapper;
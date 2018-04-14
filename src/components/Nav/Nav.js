import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar navbar-default">
            <div className="brand">Clicky McGee</div>
            <div className="navbar-text scores">Current Score: {props.score} <br/>
            High Score: {props.highScore} </div>
    </nav>
);

export default Nav;
import React from "react";

const Nav = props => (
    <nav className="navbar navbar-default">
        <ul>
            <li className="brand">Clicky McGee</li>
            <li>Click on an Image to begin!</li>
            <li>Current Score: {props.score} </li>
            <li>High Score: {props.highScore} </li>
        </ul>
    </nav>
);

export default Nav;
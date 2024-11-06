import React from "react";

export default function Navlink({ color, href, children }) {
    return (
        <li className="nav-item">
            <a className={"nav-link " + color} aria-current="page" href="#">{children}</a>
        </li>
    );
}
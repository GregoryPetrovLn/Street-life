import React from "react";
import {Link} from "react-router-dom";
import {LINKS} from "../config/configuration";

export default function Navigation() {
    const navItem = LINKS.map(link => {
        return (
            <li className={'nav-item'} key={link.path}>
                <Link key={link.path} to={link.path} className="nav-link">
                    <span>{link.label}</span>
                </Link>
            </li>
        )
    });
    return (

            <ul className={'nav justify-content-end'}>
                {navItem}
            </ul>

    )
}
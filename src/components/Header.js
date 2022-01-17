import React from "react";

// Images 
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header>
            <h1><img src={logo} alt="logo" width="100px" />Random React Apps</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
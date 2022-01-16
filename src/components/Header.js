import React from "react";

// Images 
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={ logo } alt="logo" width="100px" />
            <nav>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </nav>
        </header>
    );
}

export default Header;
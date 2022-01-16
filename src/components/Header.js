import React from "react";

// Components
import Nav from './Nav';

// Images 
import logo from '../images/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={ logo } alt="logo" width="100px" />
            <Nav />
        </header>
    );
}

export default Header;
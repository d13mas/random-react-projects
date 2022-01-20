import React from "react";

// Images 
import logo from '../images/logo.svg';

const Header = (props) => {

    return (
        <header className={ props.mode }>
            <h1><img src={logo} alt="logo" width="100px" />Random React Apps</h1>
            <nav>
                <ul>
                    <li className={ props.mode }>Light</li>
                    <li><span
                        className={`material-icons ${ props.mode }`}
                        onClick={() => props.onClick()}
                    >{ props.mode }</span></li>
                    <li className={ props.mode }>Dark</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
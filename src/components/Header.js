import React from "react";

// Images 
import logo from '../images/logo.svg';

const Header = ({mode, onClick}) => (
    <header className={ mode }>
        <h1><img src={logo} alt="logo" width="100px" />Random React Apps</h1>
        <nav>
            <ul>
                <li className={ mode }>Light</li>
                <li><span
                    className={`material-icons ${ mode }`}
                    onClick={() => onClick()}
                >{ mode }</span></li>
                <li className={ mode }>Dark</li>
            </ul>
        </nav>
    </header>
)

export default Header;
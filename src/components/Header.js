import React from "react";
import { Link } from 'react-router-dom'

// Images 
import logo from '../images/logo.svg';

const Header = ({mode, onClick}) => (
    <header className={ mode }>
        <h1><img src={logo} alt="logo" width="100px" />Random React Apps</h1>
        <nav>
            <ul>
                <li><Link to="/" className={ mode }>Home</Link></li>
                <li><Link to="/jokes" className={ mode }>Jokes</Link></li>
                <li><Link to="/boxes" className={ mode }>Boxes</Link></li>
                <li><Link to="/api-call" className={ mode }>API Call</Link></li>
                <li><Link to="/form" className={ mode }>Form</Link></li>
            </ul>
        </nav>
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
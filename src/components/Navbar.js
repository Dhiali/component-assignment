import React from "react";
import "../components/Navbar.css";


function Navbar() {
    return( 
    <nav className="nav">
        <a href="/" className="site-title">Car Magazine</a>
    
    <ul>
        <li>
            <a href="/booking">Test Drive</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
    </ul>
    </nav>
    );
}

export default Navbar;
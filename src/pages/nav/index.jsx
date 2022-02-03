import React from 'react';
import { NavBar } from './style';

function Navbar() {    
    return (
        <>
<NavBar>
    <p className="logo">escape</p>
    <nav>
        <li><a href="#">home</a></li> 
        <li><a href="#post  ">categories</a></li> 
        <li><a href="#">about</a></li> 
        <li><a href="#contact">contact</a></li> 
    </nav>
</NavBar>
        </>
    )
}

export default Navbar;

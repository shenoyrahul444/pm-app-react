import React from 'react';
import { Link } from 'react-router-dom';
import SignedinLinks from '../navbar/SignedinLinks';
import SignedoutLinks from '../navbar/SignedoutLinks';


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
          
            <div className="container">
            
            
                <Link to="/" className="brand-logo">Vyavastha</Link>
            
            
                <SignedinLinks />
            
            
                <SignedoutLinks />
            
            
            
            </div>
        
        </nav>
    )
}

export default Navbar;
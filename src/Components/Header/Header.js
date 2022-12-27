import './Header.css'
import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <h1>Welcome to Tshirt mania Store !!</h1>
            <nav>
               <Link to='/home'>Home</Link>
               <Link to='/orderreview'> Oreder Review</Link>
               {/* <Link></Link> */}
            </nav>
        </div>
    );
};

export default Header;
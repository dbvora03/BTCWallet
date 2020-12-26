import React from 'react'
import {Link, useHistory} from 'react-router-dom'


const Navbar = () => {

return (

    <div>
        <nav>
            <div class="nav-wrapper #424242 grey darken-3">
                <a href="#" class="brand-logo" style={{marginLeft:"20px"}}>DripCoin</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/about">About</Link></li>
                    <li><a class="waves-effect waves-light btn">Sign out</a></li>
                </ul>
            </div>
        </nav>
    </div>
)}

export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
            <ul className="sidenav" id="mobile-menu">
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks;
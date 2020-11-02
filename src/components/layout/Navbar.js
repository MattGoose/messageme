import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


//BUG - MOBILE SIDEBAR DOESN'T WORK


//component is a function, so must pass props as an argument
//this. is not needed
const Navbar = (props) => {
    //destructs auth property from mapStateToProps
    const { auth } = props;

    //returns different component dependant on existence of user id (i.e if user is logged in)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <nav className="nav-wrapper teal darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MessageMe!</Link>
                <Link to="#" className="sidenav-trigger right" data-target="mobile-menu">
                    <i className="material-icons">menu</i>
                </Link>
                {isLoaded(auth) && links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        //stores state.firebase(rootReducer).auth(auth-status?) on auth property
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Navbar);
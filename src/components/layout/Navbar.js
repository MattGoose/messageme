import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { logoutAction } from '../../store/actions/authActions';

//component is a function, so must pass props as an argument
//this. is not needed
const Navbar = (props) => {
    //destructs auth property from mapStateToProps
    const { auth } = props;

    //returns different component dependant on existence of user id (i.e if user is logged in)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <div>
            <nav className="nav-wrapper teal lighten-2 z-depth-0">
                <div className="container">
                    <Link to='/' className="brand-logo">MessageMe!</Link>
                    {isLoaded(auth) && links}
                </div>
            </nav>
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        //stores state.firebase(rootReducer).auth(auth-status?) on auth property
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Navbar);
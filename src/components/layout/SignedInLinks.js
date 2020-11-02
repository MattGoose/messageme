import React from 'react';
import { connect } from 'react-redux';

import { logoutAction } from '../../store/actions/authActions';

//component is a function, so must pass props as an argument
const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><a href="# " onClick={props.logoutAction}>Logout</a></li>
            </ul>
            <ul className="sidenav" id="mobile-menu">
                <li><a href="# " onClick={props.logoutAction}>Logout</a></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        //calls logoutAction when user click log out button in navbar
        logoutAction: () => dispatch(logoutAction())
    }
}

//first argument is normally mapState...
//if there is no state to map, first argument is null
export default connect(null, mapDispatchToProps)(SignedInLinks);
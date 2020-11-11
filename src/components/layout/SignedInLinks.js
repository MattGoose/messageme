import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutAction } from '../../store/actions/authActions';

//component is a function, so must pass props as an argument
const SignedInLinks = (props) => {
    return (
        <div>
            <ul className="right">
                <li><Link to="# " onClick={props.logoutAction}>Logout</Link></li>
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
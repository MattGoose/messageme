import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction } from '../../store/actions/authActions';

class Login extends Component {
    //initialise form state
    state = {
        email: '',
        password: '',
    }

    //function grabs input value via form id
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //calls loginAction from mapDispatchToProps
        this.props.loginAction(this.state);
    }

    render() {
        //destructs auth, authError properties from mapStateToProps
        //equivalent to const auth = this.props.auth; &
        //equivalent to const authError = this.props.authError;
        const { auth, authError } = this.props;

        //if user id exists (i.e if user is logged in) redirect to home
        if (auth.uid) return <Redirect to='/' />
        
        return (
            <div className="container">
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Login</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} required />
                        </div>
                        <div className="input-field center">
                            <button className="btn indigo z-depth-0">Login</button>
                            <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //stores state.firebase(rootReducer).auth(auth-status?) on auth property
        auth: state.firebase.auth,
        //stores state.auth(rootReducer).authError(authReducer) on authError property
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //returns loginAction with user credentials attached
        loginAction: (credentials) => dispatch(loginAction(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
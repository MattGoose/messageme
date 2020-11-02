import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerAction } from '../../store/actions/authActions';

class Register extends Component {
    //initialise form state
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    //function grabs input value via form id
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //calls registerAction from mapDispatchToProps
        this.props.registerAction(this.state);
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
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Register</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo z-depth-0">Register</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
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
        //returns registerAction with newUser details attached
        registerAction: (newUser) => dispatch(registerAction(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addPostAction } from '../../store/actions/postActions';

class CreatePost extends Component {
    state = {
        postContent: '',
    }

    //function grabs input value via form id
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //calls function from mapDispatchToProps
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPostAction(this.state);
        this.setState({
            postContent: '',
        })
    }

    render() {
        return (
            <div className="center">
                <form onSubmit={this.handleSubmit} className="white">
                    <textarea id="postContent" className="materialize-textarea" onChange={this.handleChange} value={this.state.postContent}></textarea>
                    <button className="btn pink lighten-2 z-depth-0">Add post</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostAction: (post) => dispatch(addPostAction(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
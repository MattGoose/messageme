import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import PostList from '../posts/PostList';

class Dashboard extends Component {
    render() {
        /*
        destructs posts property from mapStateToProps
        equivalent to const posts = this.props.posts;
        posts is passed down as a prop to PostList component
        */
        const { auth, posts } = this.props;

        //pause render and checks auth status &
        //then if user is not logged in, redirect to login
        if (isLoaded(auth) && !auth.uid) return <Redirect to='/login' />

        if (posts) {
           return (
                <div>
                    <div className="container">
                        <PostList posts={posts} />
                    </div>
                </div>
            ) 
        } else {
            return (
                <div className="loadingPosts container">
                    <div className="container center">
                        <div className="card z-depth-1 grey lighten-4">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title">Loading posts...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        //stores state.firebase(rootReducer).auth(auth-status?) on auth property
        auth: state.firebase.auth,
        //stores state.firestore(rootReducer).postedAt.desc.collection on posts prop
        posts: state.firestore.ordered.posts,
    }
}

/*
passes map... function to connect
connects store data with component
firestoreConnects to appropriate collection on Dashboard.js load
*/
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts', orderBy: ['postedAt', 'desc']},
    ])
)(Dashboard);
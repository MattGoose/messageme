import React from 'react';

import PostSummary from './PostSummary';
import CreatePost from '../posts/CreatePost';

//destructs posts prop from Dashboard.js
const PostList = ({posts}) => {
    return (
        <div className="post-list section">
            <CreatePost />
            {/* checks that posts exist and then maps posts */}
            {/* maps each state object to board and passes to PostSummary.js */}
            { posts && posts.map(post => {
                return (
                    <PostSummary post={post} key={post.id} /> 
                )
            })}
        </div>
    )
}

export default PostList;
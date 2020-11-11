import React from 'react';

import PostSummary from './PostSummary';
import CreatePost from '../posts/CreatePost';

//destructs posts prop from Dashboard.js
const PostList = ({posts}) => {
    return (
        <div className="section">
            <CreatePost />
            {/* checks that posts exist and then maps posts */}
            {/* maps each state object to board and passes to PostSummary.js */}
            { posts && posts.map(post => {
                return (
                    <div className="container">
                       <PostSummary post={post} key={post.id} />  
                    </div>
                )
            })}
        </div>
    )
}

export default PostList;
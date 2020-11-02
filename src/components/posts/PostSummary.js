import React from 'react';

//destructs post prop from PostList.js
//kay-value data passed all way down from postReducer.js
const PostSummary = ({post}) => {
    return (
        <div className="card z-depth-0 post-list">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ post.postContent }</span>
                <p>Created by { post.postedBy }</p>
                <p>{ post.postedAt.toDate().toString() }</p>
            </div>
        </div>
    )
}

export default PostSummary;
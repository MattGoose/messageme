import React from 'react';

import Moment from 'react-moment';

//destructs post prop from PostList.js
//kay-value data passed all way down from postReducer.js
const PostSummary = ({post}) => {
    return (
        <div className="card z-depth-1 grey lighten-4">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ post.postContent }</span>
                <p>Posted by <i>{ post.postedBy }</i></p>
                <p><Moment format="HH:mm DD/MM/YYYY">{post.postedAt.toDate()}</Moment></p>  
            </div>
        </div>
    )
}

export default PostSummary;
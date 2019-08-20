import React from 'react';

import './Post.scss';

const Post = ({ body, title, userId }) => {

    return (
        <div className="post col-12">
            <div className="post_title mt-2 mb-3">
                {title}
            </div>
            <div className="post_body mb-2">
                {body}
            </div>
            <div className="post_author mb-2">
                {userId}
            </div>
        </div>
    )
}

export default Post;
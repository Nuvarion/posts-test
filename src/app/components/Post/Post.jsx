import React from 'react';

import './Post.scss';

const Post = ({ body, title, author, image }) => {

    return (
        <div className="row justify-content-center mb-3">
            <div className="post col-7">
                <div className="post_title mt-2 mb-3">
                    {title}
                </div>
                <div className="post_image mb-2">
                    <img className="mw-100" src={`${image}`} alt="post-image"/>
                </div>
                <div className="post_body mb-2">
                    {body}
                </div>
                <div className="post_author mb-2">
                    {author}
                </div>
            </div>
        </div>
    )
}

export default Post;
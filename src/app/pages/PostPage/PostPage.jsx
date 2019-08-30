import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, fetchCommentPage } from 'app_redux/features/posts';
import DeletePost from 'app_components/DeletePost';
import Spinner from 'app_components/Spinner';
import InputsEditPost from 'app_components/InputsEditPost'

import './PostPage.scss';

const PostPage = ({ actions, match: { params: { id } }, items, images, users, commentsPage, loading, form }) => {

    useEffect(() => {
        actions.fetchPosts();
        actions.fetchCommentPage(id);
    }, []);

    const getComments = (commentsPage) => {
        const commentsData = commentsPage.map((item) => {

            return (
                <div key={item.id} className="row justify-content-center">
                    <div className="comments post col-7">
                        <div className="comments_body pt-2 pb-2">
                            {item.body}
                        </div>
                        <div className="comments_author pb-2">
                            {item.name}
                        </div>
                    </div>
                </div>
            );
        });
        return commentsData;
    }

    // const onEditPost = () => {
    //     actions.fetchEditPost(title, body)
    // }

    const item = items.find(el => el.id == id) || {};

    const { body, title, userId } = item || {};
    
    const image = images.find(el => el.id == id) || {};

    const { url } = image || {};

    const user = users && users.find(el => el.id === userId) || {};

    const { name, username, email, website } = user || {};

    // const { inputs } = form || {};

    // console.log(inputs)

    // const formTitle = inputs[id].title || {};

    // const formBody = inputs[id].body || {};

    // console.log(formTitle, formBody)


    return (
        <>
            <div className="row d-flex justify-content-center mb-3">
                <div className="post col-7">
                    <div className="post_title mt-2 mb-3">
                        {title}
                    </div>
                    <div className="post_image mb-3">
                        <img className="mw-100" src={`${url}`} alt="post-image"/>
                    </div>
                    <div className="post_body mb-3">
                        {body}
                    </div>
        
                    <InputsEditPost 
                        id={id}
                        // title={title}
                        // body={body}
                        />

                    <div className="d-flex align-items-center justify-content-end">
                        <DeletePost postId={id} />

                        <button 
                            className="btn-edit btn btn-warning mb-2"
                            // onClick={onEditPost}
                            >
                            Edit
                        </button>
                    </div>

                </div>
            </div>    
            
            <div className="author-post row justify-content-center mb-3">
                <div className="post post-author col-7">
                    <div className="mt-2 mb-3">
                        <span className="mr-3 post-author_name">Author:  </span>
                        <span>{name}</span>
                    </div>
                    <div className="mt-2 mb-3">
                        <span className="mr-3 post-author_username">Username:  </span>
                        <span>{username} </span>
                    </div>
                    <div className="mt-2 mb-3">
                        <span className="mr-3 post-author_email">Email:  </span>
                        <span>{email}</span>
                    </div>
                    <div className="mt-2 mb-3">
                        <span className="mr-3 post-author_website">Website:  </span>
                        <span>{website}</span>
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <div className="d-flex justify-content-center mb-3">
                    <span className="comments_title">Comments</span>
                </div>
                {loading ? <Spinner /> : getComments(commentsPage)}
            </div>
        </>
    );
};

const mapStateToProps = ({ form, posts: { items, images, users, commentsPage } }) => {

    return {
        form,
        items,
        images,
        users,
        commentsPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        fetchPosts,
        fetchCommentPage
      }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);



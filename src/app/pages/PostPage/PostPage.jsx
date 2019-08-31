import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, fetchCommentPage } from 'app_redux/features/posts';
import { switchEditShow, fetchEditPost } from 'app_redux/features/form';
import DeletePost from 'app_components/DeletePost';
import Spinner from 'app_components/Spinner';
import InputsPost from 'app_components/InputsPost'

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
                    <div className="comments post col-10 col-md-9 col-lg-7">
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

    const onShowEditInputs = () => {
        actions.switchEditShow();
    }

    const onEditPost = () => {
        actions.fetchEditPost(bodyForm, titleForm, id);
        actions.switchEditShow();
    }

    const item = items.find(el => el.id == id) || {};

    const { body, title, userId } = item || {};
    
    const image = images.find(el => el.id == id) || {};

    const { url } = image || {};

    const user = users && users.find(el => el.id === userId) || {};

    const { name, username, email, website } = user || {};

    const { showEditInputs } = form;

    const { inputs } = form || {};

    const titleForms = inputs[id] || {};
    const titleForm = titleForms.title || title || '';

    const bodyForms = inputs[id] || {};
    const bodyForm = bodyForms.body || body || '';

    return (
        <>
            <div className="row d-flex justify-content-center mb-3">
                <div className="post col-10 col-md-9 col-lg-7">
                    <div className="post_title mt-2 mb-3">
                        {title}
                    </div>
                    <div className="post_image mb-3">
                        <img className="mw-100" src={`${url}`} alt="post-image"/>
                    </div>
                    <div className="post_body mb-3">
                        {body}
                    </div>

                    <div className={showEditInputs ? "d-none" : null}>
                        <InputsPost 
                            id={id}
                            title={titleForm}
                            body={bodyForm}
                            />
                    </div>

                    <div className="d-flex align-items-center justify-content-end">
                        
                        <DeletePost postId={id} />

                        <button 
                            className={showEditInputs ? "btn-edit btn btn-warning mb-2" : 'd-none'}
                            onClick={onShowEditInputs}
                            >
                            Edit
                        </button>
                        
                        <button 
                            className={!showEditInputs ? "btn-edit btn btn-success mb-2" : 'd-none'}
                            onClick={onEditPost}
                            >
                            Submit
                        </button>

                    </div>

                </div>
            </div>    
            
            <div className="author-post row justify-content-center mb-3">
                <div className="post post-author col-10 col-md-9 col-lg-7">
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
        fetchCommentPage,
        switchEditShow,
        fetchEditPost
      }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);



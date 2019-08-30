import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchAddPost } from 'app_redux/features/form';
import { fetchPosts } from 'app_redux/features/posts';
import InputsEditPost from 'app_components/InputsEditPost';

import './AddPostPage.scss';

const AddPostPage = ({ actions, addPostId, title, body }) => {

    useEffect(() => {
        actions.fetchPosts()
    }, [])
    
    const onAddPost = () => {
        const userId = 11;
        console.log(title,body)
        actions.fetchAddPost(userId, title, body);
    };

    return (

        <div className="container">
            <div className="container-title mb-3">Enter data</div>

            <InputsEditPost 
                id={addPostId}
                title={title || ''}
                body={body || ''}
                />

            <div className="btn d-flex justify-content-end mb-3">
                <Link to='/posts'>
                    <button 
                        className="btn btn-success"
                        onClick={onAddPost}
                        >
                        <span className="btn-text">Create post</span>
                    </button>
                </Link>
            </div>   
        </div>
    );
};

const mapStateToProps = ({ form, posts }) => {

    const { items } = posts;

    const addPostId = items.length + 1;

    const { inputs } = form || {};

    const input = inputs[addPostId] || {}; 

    const { title, body } = input || {};
    
    return {
        title,
        body,
        addPostId,
        items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchPosts,
            fetchAddPost
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);
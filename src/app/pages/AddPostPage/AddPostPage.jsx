import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchAddPost } from 'app_redux/features/form';
import { fetchPosts } from 'app_redux/features/posts';
import InputsEditPost from 'app_components/InputsEditPost';

import './AddPostPage.scss';

const AddPostPage = ({ title, body, actions, items }) => {

    useEffect(() => {
        actions.fetchPosts()
    }, [])
    
    const onAddPost = () => {
        const userId = 11;
        actions.fetchAddPost(title, body, userId);
    };

    return (

        <div className="container">
            <div className="container-title mb-3">Enter data</div>

            <InputsEditPost id={items.length + 1}/>

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

    const { inputs: { title, body } } = form;

    const { items } = posts;

    return {
        title,
        body, 
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
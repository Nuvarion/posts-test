import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchAddPost } from 'app_redux/features/form';
import InputEditPost from 'app_components/InputEditPost';

import './AddPostPage.scss';

const AddPostPage = ({ title, body, actions }) => {

    
    const onAddPost = () => {
        const userId = 11;
        actions.fetchAddPost(title, body, userId);
    };

    return (

        <div className="container">
            <div className="mb-3">Enter data</div>

            <InputEditPost />
            
            <Link to='/posts' className="container-btn d-flex justify-content-end mb-3">
                <button 
                    className="btn btn-success"
                    onClick={onAddPost}
                    >
                    Create post
                </button>
            </Link>
        </div>
    );
};

const mapStateToProps = ({ form }) => {

    const { title, body } = form;

    return {
        title,
        body
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchAddPost
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostPage);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, fetchCommentPage } from 'app_redux/features/posts';
import DeletePost from 'app_components/DeletePost';
import Spinner from 'app_components/Spinner';
import InputEditPost from 'app_components/InputEditPost'


import './PostPage.scss';

class PostPage extends Component {

    componentDidMount() {
        this.props.actions.fetchPosts();
        this.props.actions.fetchCommentPage(this.props.match.params.id);
    };

    getComments = (commentsPage) => {
        const commentsData = commentsPage.map((item) => {

            return (
                <div key={item.id} className="row justify-content-center mb-3">
                    <div className="comment post col-7">
                        <div className="comment_body">
                            {item.body}
                        </div>
                        <div className="comment_author">
                            {item.name}
                        </div>
                    </div>
                </div>
            );
        });
        return commentsData;
    }

    render() {

        const { match: { params: { id } }, items, images, users, commentsPage, loading } = this.props;

        const item = items.find(el => el.id == id) || {};

        const { body, title, userId } = item || {};
        
        const image = images.find(el => el.id == id) || {};

        const { url } = image || {};

        const user = users && users.find(el => el.id === userId) || {};

        const { name, username, email, website } = user || {};

        return (
            <React.Fragment>
                
                <div className="row justify-content-center mb-3">
                    <div className="post col-7">
                        <div className="mt-2 mb-3">
                            {title}
                        </div>
                        <div className="post_image mb-2">
                            <img className="mw-100" src={`${url}`} alt="post-image"/>
                        </div>
                        <div className="post_body mb-2">
                            {body}
                        </div>
            
                        <InputEditPost id={id}/>

                        <button className="btn btn-warning mb-2">
                            Edit
                        </button>
                        
                        <DeletePost postId={id}/>
                    </div>
                </div>    
                
                <div className="row justify-content-center mb-3">
                    <div className="post col-7">
                        <div className="mt-2 mb-3">
                            <span>Author:  {name}</span>
                        </div>
                        <div className="mt-2 mb-3">
                            <span>Username:  {username}</span>
                        </div>
                        <div className="mt-2 mb-3">
                            <span>Email:  {email}</span>
                        </div>
                        <div className="mt-2 mb-3">
                            <span>Website:  {website}</span>
                        </div>
                    </div>
                </div>
                <div className="comments-container">
                    <div className="d-flex justify-content-center mb-3">
                        <span>Comments</span>
                    </div>
                    {loading ? <Spinner /> : this.getComments(commentsPage)}
                </div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = ({ posts: { items, images, users, commentsPage } }) => {
    return {
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



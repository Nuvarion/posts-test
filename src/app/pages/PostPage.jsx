import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, fetchCommentPage } from 'app_redux/features/posts';

import './PostPage.scss';

class PostPage extends Component {

    componentDidMount() {
        this.props.actions.fetchPosts();
        this.props.actions.fetchCommentPage(this.props.match.params.id);
    };

    getComments = (commentsPage) => {
        const commentsData = commentsPage.map((item) => {

            return (
                <div className="row justify-content-center mb-3">
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

        const { match: { params: { id } }, items, images, users, commentsPage } = this.props;

        const { body, title } = items[id - 1] || {};

        const { url } = images[id - 1] || {};

        const { name, username, email, website } = users[id - 1] || {};

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
                    {this.getComments(commentsPage)}
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



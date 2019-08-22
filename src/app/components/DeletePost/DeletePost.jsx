import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchDelete } from 'app_redux/features/posts';

import './DeletePost.scss'

const DeletePost = ({ actions, postId, loading }) => {

    const onDeletePost = () => {
        return actions.fetchDelete(postId)
    }

    return (
        <Link to='/posts'>
            <button 
                className="btn btn-danger ml-3 mb-2"
                onClick={onDeletePost}
                >
                    Delete
            </button>
        </Link>
        
    )
}

const mapStateToProps = ({  }) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchDelete
        }, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(DeletePost);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'app_redux/features/posts';

import Spinner from '../components/Spinner'

const StartPageContainer = ({ posts, fetchPosts }) => {

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="main">
      { posts.loading ? (
        <Spinner />
      ) : null}
    </div>
  )
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
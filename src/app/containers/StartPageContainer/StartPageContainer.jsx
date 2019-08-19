import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'app_redux/features/posts';

const StartPageContainer = ({ posts, fetchPosts }) => {
  console.log(posts)

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="main">
      { posts.loading ? (
        <h1>...loading</h1>
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
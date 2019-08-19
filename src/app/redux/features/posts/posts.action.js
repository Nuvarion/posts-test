import * as t from './constants'

function fetchPosts() {
  return {
    type: t.FETCH_POSTS,
  }
}

function fetchPostsSuccess(data) {
  return {
    type: t.FETCH_POSTS_SUCCESS,
    payload: data
  }
}

function fetchPostsError(err) {
  return {
    type: t.FETCH_POSTS_ERROR,
    payload: err
  }
}

export {
  fetchPosts
}
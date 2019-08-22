import ApiService from 'app_services/ApiService'
import * as t from './constants'

function fetchPosts() {

  return (dispatch) => {

    dispatch({
      type: t.FETCH_POSTS
    })

    dispatch(fetchUsers())
    dispatch(fetchImages())

    ApiService.get('/posts')
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchPostsSuccess(res.data))
      } else {
        dispatch(fetchPostsError(err))
      }
     })
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

function fetchUsers() {

  return (dispatch) => {

    dispatch({
      type: t.FETCH_USERS
    })

    ApiService.get('/users')
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchUsersSuccess(res.data))
        } else {
          dispatch(fetchUsersError(err))
        }
     })
  }
}

function fetchUsersSuccess(data) {
  return {
    type: t.FETCH_USERS_SUCCESS,
    payload: data
  }
}

function fetchUsersError(err) {
  return {
    type: t.FETCH_USERS_ERROR,
    payload: err
  }
}

function fetchImages() {

  return (dispatch) => {

    dispatch({
      type: t.FETCH_IMAGES
    })

    ApiService.get('/photos')
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchImagesSuccess(res.data))
        } else {
          dispatch(fetchImagesError(err))
        }
     })
  }
}

function fetchImagesSuccess(data) {
  return {
    type: t.FETCH_IMAGES_SUCCESS,
    payload: data
  }
}

function fetchImagesError(err) {
  return {
    type: t.FETCH_IMAGES_ERROR,
    payload: err
  }
}

function fetchCommentPage(postId) {
  return (dispatch) => {
    dispatch({
      type: t.FETCH_COMMENTS
    })

    ApiService.get(`/comments?postId=${postId}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchCommentsSuccess(res.data))
        } else {
          dispatch(fetchCommentsError(err))
        }
     })
  }
}

function fetchCommentsSuccess(data) {
  return {
    type: t.FETCH_COMMENTS_SUCCESS,
    payload: data
  }
}

function fetchCommentsError(err) {
  return {
    type: t.FETCH_COMMENTS_ERROR,
    payload: err
  }
}

function fetchDelete(postId) {

  return (dispatch) => {

    dispatch({
      type: t.FETCH_POSTS_DELETE
    })

    ApiService.delete(`/posts/${postId}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchDeleteSuccess())
        } else {
          dispatch(fetchDeleteError())
        }
     })
  }
}

function fetchDeleteSuccess() {
  return {
    type: t.FETCH_POSTS_DELETE_SUCCESS,
    payload: {}
  }
}

function fetchDeleteError(err) {
  return {
    type: t.FETCH_POSTS_DELETE_ERROR,
    payload: err
  }
}

function setPage(selected) {
  return {
    type: t.SWITCH_PAGES,
    payload: selected
  }
}

export {
  fetchPosts,
  fetchUsers,
  fetchImages,
  setPage,
  fetchCommentPage,
  fetchDelete
}
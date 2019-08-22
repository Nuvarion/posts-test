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
      }
     })
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
        }
     })
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
        }
     })
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

function fetchUsersSuccess(data) {
  return {
    type: t.FETCH_USERS_SUCCESS,
    payload: data
  }
}

function fetchImagesSuccess(data) {
  return {
    type: t.FETCH_IMAGES_SUCCESS,
    payload: data
  }
}

function fetchCommentsSuccess(data) {
  return {
    type: t.FETCH_COMMENTS_SUCCESS,
    payload: data
  }
}

function setPage(selected) {
  return {
    type: t.SWITCH_PAGES,
    payload: selected
  }
}

// function fetchPostsError(err) {
//   return {
//     type: t.FETCH_POSTS_ERROR,
//     payload: err
//   }
// }

export {
  fetchPosts,
  fetchUsers,
  fetchImages,
  setPage,
  fetchCommentPage
}
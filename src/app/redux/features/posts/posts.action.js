import ApiService from 'app_services/ApiService'
import * as t from './constants'

function fetchPosts() {

  return (dispatch) => {
    
    dispatch({
      type: t.FETCH_POSTS
    })

    ApiService.get('/posts')
    .then((res) => {
      if (res.status === 200) {
        dispatch(fetchPostsSuccess(res.data))
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

export {
  fetchPosts
}
import ApiService from 'app_services/ApiService';
import * as t from './constants';
import { fetchPosts } from 'app_redux/features/posts'
import { bindActionCreators } from 'redux';

function changeInputs(inp, id) {

    return {
        type: t.CHANGE_INPUTS,
        payload: { id, inp }
    };
};

function fetchAddPost(userId, title, body) {
    return (dispatch) => {
      dispatch({
        type: t.FETCH_ADD_POSTS
      })

      ApiService.post(`/posts`, {
            title: title,
            body: body,
            userId: userId
      }).then((res) => { 
        if (res.status === 201) {
          dispatch(fetchAddPostSuccess(res.data))
          } else {
            dispatch(fetchAddPostError(res.status))
          }
       })
    };
  }

function fetchAddPostSuccess(data) {
  return {
    type: t.FETCH_ADD_POSTS_SUCCESS,
    payload: data
  };
}

function fetchAddPostError(err) {
  return {
    type: t.FETCH_ADD_POSTS_ERROR,
    payload: err
  };
}

function fetchEditPost(body, title, id, userId) {
  return (dispatch) => {
    dispatch({
      type: t.FETCH_EDIT_POSTS
    })

    ApiService.put(`/posts/${id}`, {
          id: id,
          title: title,
          body: body,
          userId: userId
    }).then((res) => {
      if (res.status === 200) {
        dispatch(fetchPosts())
        } else {
          dispatch(fetchEditPostError(res.status))
        }
     })
  }
}

function fetchEditPostError(err) {
  return {
    type: t.FETCH_EDIT_POSTS_ERROR,
    payload: err
  }
}

function switchEditShow() {
  return {
    type: t.SWITCH_EDIT_SHOW
  }
}

export {
    changeInputs,
    fetchAddPost,
    fetchEditPost,
    switchEditShow,
    fetchEditPostError
};
import ApiService from 'app_services/ApiService';
import * as t from './constants';

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
            dispatch(fetchAddPostError(err))
          }
       })
    }
  }

function fetchAddPostSuccess(data) {
  return {
    type: t.FETCH_ADD_POSTS_SUCCESS,
    payload: data
  }
}

function fetchAddPostError(err) {
  return {
    type: t.FETCH_ADD_POSTS_ERROR,
    err: err
  }
}

export {
    changeInputs,
    fetchAddPost
};
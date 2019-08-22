import ApiService from 'app_services/ApiService';
import * as t from './constants';

function changeTitle(inp, id) {
    return {
        type: t.CHANGE_TITLE,
        payload: { id, inp } // { name: 'title', value: 'dfaa' }
    };
};

function changeBody(str) {
    return {
        type: t.CHANGE_BODY,
        payload: str
    };
};

function fetchAddPost(title, body, userId) {
    return (dispatch) => {
      dispatch({
        type: t.FETCH_ADD_POSTS
      })
  
      ApiService.post(`/posts`, {
            title: title,
            body: body,
            userId: userId
      }).then((res) => { console.log(res)
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
    changeTitle,
    changeBody,
    fetchAddPost
};
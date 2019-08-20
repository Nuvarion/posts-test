import * as t from './constants';

const initialState = {
  items: [],
  loading: false,
}

const posts = (state = initialState, action) => {
  switch(action.type) {
    case t.FETCH_POSTS:
      return {
        ...state,
        loading: true
      }
    case t.FETCH_POSTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state;
  }
}

export { posts }
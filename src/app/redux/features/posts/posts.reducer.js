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
    
    default:
      return state;
  }
}

export { posts }
import * as t from './constants';

const initialState = {
  items: [],
  users: [],
  images: [],
  commentsPage: [],
  page: 0,
  loading: false,
  // postLoading: {
    
  // }
}

const posts = (state = initialState, action) => {

  switch(action.type) {

    case t.FETCH_POSTS:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_USERS:
      return {
        ...state,
        loading: true
      }
    
    // case t.FETCH_POST_DELETE:
    //   const nextState = { ...state }
    //   nextState.postLoading[action.payload] = true;
    //   return nextState;

    case t.FETCH_IMAGES:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      }

    case t.SWITCH_PAGES:
      return {
        ...state,
        page: action.payload
      }

    case t.FETCH_POSTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        items: action.payload
      }

    case t.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }

    case t.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload
      }

    case t.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        commentsPage: action.payload
      }

    default:
      return state;
  }
}

export { posts }
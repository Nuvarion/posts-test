import * as t from './constants';

const initialState = {
  items: [],
  users: [],
  images: [],
  commentsPage: [],
  page: 0,
  loading: false,
  error: false
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

    case t.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    
    case t.FETCH_USERS:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }

    case t.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    
    case t.FETCH_IMAGES:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload
      }
    
    case t.FETCH_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
        
    case t.FETCH_COMMENTS:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        commentsPage: action.payload
      }

    case t.FETCH_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }

    case t.SWITCH_PAGES:
      return {
        ...state,
        page: action.payload
      }

    case t.FETCH_POSTS_DELETE:
      return {
        ...state,
        loading: true
      }

    case t.FETCH_POSTS_DELETE_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case t.FETCH_POSTS_DELETE_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
}

export { posts }
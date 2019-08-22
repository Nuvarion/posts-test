import * as t from './constants';

const initialState = {
  items: [],
  users: [],
  images: [],
  page: 0,
  loading: false
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

    case t.FETCH_IMAGES:
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

    default:
      return state;
  }
}

export { posts }
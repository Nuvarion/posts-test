import * as t from './constants';

const initialState = {
    title: '',
    body: '',
    inputs: {},
    loading: false,
    err: false,
    addPost: {}
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case t.CHANGE_TITLE:
            const inputs = { ...state.inputs }; 
            const { id, inp } = action.payload;
            const { name, value } = inp;
            const newPost = inputs[id] || {}; 
            newPost[name] = value; 
            inputs[id] = newPost;

            return {
                ...state,
                title: action.payload,
                inputs
            }
        
        case t.CHANGE_BODY:
            return {
                ...state,
                body: action.payload
            }

        case t.FETCH_ADD_POSTS:
            return {
                ...state,
                loading: true
            }

        case t.FETCH_ADD_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                addPost: action.payload
            }

        case t.FETCH_ADD_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                err: true
            }

        default: 
            return state
    };
};

export { form };
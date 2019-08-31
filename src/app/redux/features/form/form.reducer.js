import * as t from './constants';

const initialState = {
    inputs: {},
    loading: false,
    err: false,
    addPost: {},
    showEditInputs: true
};

const form = (state = initialState, action) => {

    switch (action.type) {
        case t.CHANGE_INPUTS:
            const inputs = { ...state.inputs }; 
            const { id, inp } = action.payload;
            const { name, value } = inp;
            const newPost = inputs[id] || {}; 
            newPost[name] = value; 
            inputs[id] = newPost;
            return {
                ...state,
                inputs
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
        
        case t.SWITCH_EDIT_SHOW:

            const switchEditShow = !state.showEditInputs

            return {
                ...state,
                showEditInputs: switchEditShow
            }

        case t.FETCH_EDIT_POSTS_ERROR:
            return {
                ...state,
                err: true
            }

        default: 
            return state
    };
};

export { form };
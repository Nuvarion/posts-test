import * as t from './constants';

const initialState = {
    search: '',
    filter: ''
}

const filter = (state = initialState, action) => {
    switch (action.type) {

        case t.CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload
            }

        case t.CHANGE_FILTER:
            return {
                ...state,
                filter: action.payload
            }

        default: 
            return state
    }
}

export {
    filter
}
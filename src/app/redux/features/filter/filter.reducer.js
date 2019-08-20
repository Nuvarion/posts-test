import * as t from './constants';

const initialState = {
    search: ''
}

const filter = (state = initialState, action) => {
    switch (action.type) {

        case t.CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload
            }

        default: 
            return state
    }
}

export {
    filter
}
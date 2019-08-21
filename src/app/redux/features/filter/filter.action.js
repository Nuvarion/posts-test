import * as t from './constants';

function changeSearch(str) {
    return {
        type: t.CHANGE_SEARCH,
        payload: str
    }
}

function changeFilter(str) {
    return {
        type: t.CHANGE_FILTER,
        payload: str
    }
}

export {
    changeSearch,
    changeFilter
}

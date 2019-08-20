import * as t from './constants';

function changeSearch(str) {
    return {
        type: t.CHANGE_SEARCH,
        payload: str
    }
}

export {
    changeSearch
}

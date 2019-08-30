function regExpSearch(value) {

    const regExpSearch = new RegExp(`^${value}`, 'i');

    return regExpSearch
};

export default regExpSearch;
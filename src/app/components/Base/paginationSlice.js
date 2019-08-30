function paginationSlice(arr, perPage, page) {

    const firstEl = perPage * page;

    const lastEl = firstEl + perPage;

    return arr.slice(firstEl, lastEl);
};

export default paginationSlice;
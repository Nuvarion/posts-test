import React from 'react';

import './Search.scss';

const Search = () => {
    return (
        <div className="search mb-5">
            <span className="search_text pr-2">
                Enter post title:
            </span>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Search;
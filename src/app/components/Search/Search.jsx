import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearch } from 'app_redux/features/filter';

import './Search.scss';

const Search = ({ actions, search }) => {

    const changeHandler = (e) => {
        actions.changeSearch(e.target.value)
    }

    return (
        <div className="search mb-5">
            <span className="search_text pr-2">
                Enter post title:
            </span>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input 
                        name="search"
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                        value={search}
                        onChange={changeHandler}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

const mapStateToProps = ({ filter }) => {

    const { search } = filter
    
    // console.log(filter.search)

    return {
       search
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        changeSearch
      }, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { changeSearch } from 'app_redux/features/filter';

import './Search.scss';

const Search = ({ actions, search }) => {

    const changeHandler = (e) => {
        actions.changeSearch(e.target.value)
    }

    return (
        <div className="search">
            <nav className="navbar navbar-white bg-white">
                <div className="form-inline">
                    <input 
                        name="search"
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Enter title post" 
                        aria-label="Search" 
                        value={search}
                        onChange={changeHandler}
                    />
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = ({ filter: { search } }) => {
    
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
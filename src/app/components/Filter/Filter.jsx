import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeFilter } from 'app_redux/features/filter';

import './Filter.scss';

const Filter = ({ actions, filter }) => {

    const changeHandler = (e) => {
        actions.changeFilter(e.target.value)
    }

    return(
        <div className="search mb-5">
            <span className="search_text pr-2">
                Enter author name:
            </span>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input 
                        name="filter"
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="name" 
                        aria-label="Filter" 
                        value={filter}
                        onChange={changeHandler}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Filter</button>
                </form>
            </nav>
        </div>
    )
}

const mapStateToProps = ({filter: { filter }}) => {
    return {
        filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        changeFilter
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
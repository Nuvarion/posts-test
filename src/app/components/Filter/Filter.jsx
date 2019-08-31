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
        <div className="search">
            <nav className="navbar navbar-white bg-white">
                <form className="form-inline">
                    <input 
                        name="filter"
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Enter author name" 
                        aria-label="Filter" 
                        value={filter}
                        onChange={changeHandler}
                    />
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
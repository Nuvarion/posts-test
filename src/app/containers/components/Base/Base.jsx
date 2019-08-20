import React from 'react';
import { connect } from 'react-redux';

import './Base.scss';

const Base = () => {
   return (
       <React.Fragment>

            <header className="header">
                <div className="header_item">
                    <span>BLOG</span>
                </div>
            </header>

            <div className="search">
                <span className="search_text">
                    Enter post title:
                </span>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>

            <div className="container content">
                    <div className="row">
                        <div className="col content_body">
                            hello world
                        </div>
                        <div className="col content_body">
                            hello world
                        </div>
                        <div className="col content_body">
                            hello world
                        </div>
                        <div className="col content_body">
                            hello world
                        </div>
                </div>
            </div>
            
            <div className="pagination">

            </div>

       </React.Fragment>
        
   ) 
}

const mapStateToProps = ({ items: { }})

export default connect()(Base);
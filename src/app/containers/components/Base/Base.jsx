import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Search from '../Search';
import Pagination from '../Pagination';

import './Base.scss';

const Post = ({ body, id, title, userId }) => {

    return (
        
        <div className="col-12 content_body">
            {body}
        </div>
    )
}

class Base extends Component {

    getPosts = (items) => {
        const postsData = items.map((item) => {
            return (
                <Post 
                    body={item.body}
                    key={item.id}
                    title={item.title}
                    userId={item.userId}
                />
            );
        });
        return postsData
    };

    render() {

        const { items } = this.props

        console.log(items)

        return (
            <div className="base">
                <Header />
                <Search />

                <div className="container content">
                    <div className="row">
                        {this.getPosts(items)}
                    </div>
                </div>

                 <Pagination />
            </div>
        ) 
    }
   
}

const mapStateToProps = ({ posts: { items } }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Base);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header';
import Search from '../Search';
import Post from '../Post';
import Pagination from '../Pagination';
import Footer from '../Footer';

import './Base.scss';

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
                 <Footer />
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
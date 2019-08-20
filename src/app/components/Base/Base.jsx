import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'app_redux/features/posts';

import Search from 'app_components/Search';
import Post from 'app_components/Post';
import Pagination from 'app_components/Pagination';
import Spinner from 'app_components/Spinner'

import './Base.scss';

class Base extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

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

        const { posts: { items }, loading } = this.props

        return (
            <div className="base">
                <Search />
                <div className="container content">

                    <div className="main">
                        { loading ? (
                            <Spinner />
                        ) : null}
                    </div>

                    <div className="row">
                        {this.getPosts(items)}
                    </div>
                </div>
                 <Pagination />
            </div>
        ) 
    }
   
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      fetchPosts: () => dispatch(fetchPosts())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Base);
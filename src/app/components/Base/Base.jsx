import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts } from 'app_redux/features/posts';
import Search from 'app_components/Search';
import Post from 'app_components/Post';
import Pagination from 'app_components/Pagination';
import Spinner from 'app_components/Spinner'

import './Base.scss';

class Base extends Component {

    componentDidMount() {
        this.props.actions.fetchPosts();
    }

    getPosts = (items, users, images) => {
        const postsData = items.map((item) => {

            const user = users.find((el) => {
                return item.userId == el.id
            }) || {}
            
            const image = images.find((el) => {
                return item.id == el.id
            }) || {}

            return (
                <Post
                    body={item.body}
                    key={item.id}
                    title={item.title}
                    author={user.name || item.userId}
                    image={image.url}
                />
            );
        });
        return postsData
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
            .toLowerCase().indexOf(term) > -1;
        });
    };

    render() {

        const { loading, items, users, images } = this.props

        return (
            <div className="base">
                <Search />
                <div className="container content">

                    <div className="main">
                        { loading ? (
                            <Spinner />
                        ) : null}
                    </div>

                    <div>
                        {this.getPosts(items, users, images)}
                    </div>
                </div>
                 <Pagination />
            </div>
        ) 
    }
}

const mapStateToProps = ({ posts, filter }) => {

    const reg = new RegExp(`${filter.search}`, 'i');
    const { loading, items, users, images } = posts;
    const filteredItems = items.filter((el) => {
        return reg.test(el.title);
    })

    return {
        items: filteredItems,
        loading,
        users,
        images
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        fetchPosts,
      }, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Base);
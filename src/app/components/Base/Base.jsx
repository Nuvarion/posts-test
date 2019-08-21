import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts } from 'app_redux/features/posts';
import Search from 'app_components/Search';
import Filter from 'app_components/Filter';
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

            // console.log(!!(user.name))

            // if (!!(user)) {

            //     const userFiltering = items.filter((el) => {
            //         return el.id == items.userId
            //     }) || {}

            // }

            return (
                <Post
                    body={item.body}
                    key={item.id}
                    title={item.title}
                    author={user.name}
                    image={image.url}
                />
            );
        });
        return postsData
    };

    render() {

        const { loading, items, users, images } = this.props

        return (
            <div className="base">
                <Search />
                <Filter />
                <div className="container content">

                    <div className="main">
                        { loading ? <Spinner /> : null}
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

const mapStateToProps = ({ posts, filter: { filter, search } }) => {

    const { loading, items, users, images, items: { userId } } = posts;

    const filteredUsers = users.filter((el) => {
        return regExpSearch(filter).test(el.name)
    })

    const filteredItems = items.filter((el) => {
        const user = filteredUsers.find((item) => {
            return el.userId === item.id;
        })

        return regExpSearch(search).test(el.title) && user;
    })

    return {
        items: filteredItems,
        loading,
        users,
        images,
        userId
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

function regExpSearch(value) {

    let regExpSearch = new RegExp(`^${value}`, 'i');

    return regExpSearch
}
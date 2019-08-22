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
    };

    getPosts = (items, users, images) => {
        const postsData = items.map((item) => {

            const user = users.find((el) => {
                return item.userId == el.id
            }) || {};

            const image = images.find((el) => {
                return item.id == el.id
            }) || {};

            return (
                <Post
                    body={item.body}
                    key={item.id}
                    title={item.title}
                    author={user.name}
                    image={image.url}
                    id={item.id}
                />
            );
        });
        return postsData;
    };

    render() {

        const { loading, items, users, images, page } = this.props;

        return (
            <div className="base">
                <Search />
                <Filter />
                <div className="container content">

                    <div className="main">
                        { loading ? <Spinner /> : null }
                    </div>

                    <div>

                        {paginationSlice(this.getPosts(items, users, images), 10, page)}

                        <Pagination
                            pageCount={Math.ceil(this.getPosts(items, users, images).length / 10)}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = ({ posts, filter: { filter, search } }) => {

    const { loading, items, users, images, page, items: { userId } } = posts;

    const filteredUsers = users.filter((el) => {
        return regExpSearch(filter).test(el.name)
    });

    const filteredItems = items.filter((el) => {
        const user = filteredUsers.find((item) => {
            return el.userId === item.id;
        });

        return regExpSearch(search).test(el.title) && user;
    });

    return {
        items: filteredItems,
        loading,
        users,
        images,
        userId,
        page
    };
}

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        fetchPosts
      }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);

function regExpSearch(value) {

    const regExpSearch = new RegExp(`^${value}`, 'i');

    return regExpSearch
}

function paginationSlice(arr, perPage, page) {

    const firstEl = perPage * page;

    const lastEl = firstEl + perPage;

    return arr.slice(firstEl, lastEl);
};


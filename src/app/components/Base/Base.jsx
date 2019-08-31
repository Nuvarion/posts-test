import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from 'app_redux/features/posts';
import Post from 'app_components/Post';
import Pagination from 'app_components/Pagination';
import Spinner from 'app_components/Spinner'
import paginationSlice from './paginationSlice';
import regExpSearch from './regExpSearch';

import './Base.scss';

const Base = ({ actions, loading, items, users, images, page }) => {

    useEffect(() => {
        actions.fetchPosts();
    }, []);

    const getPosts = (items, users, images) => {
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

    return (
        <div className="base">

            <div className="container-btn container d-flex justify-content-center mb-5">
                <Link to='/add/post'>
                    <button 
                        className="btn btn-lg btn-success">
                            Add Post
                    </button>
                </Link>
            </div>
           
            <Pagination
                        pageCount={Math.ceil(getPosts(items, users, images).length / 10)}
                    />
            
            <div className="container content">

                <div className="main">
                    { loading ? <Spinner /> : null }
                </div>

                <div>

                    {paginationSlice(getPosts(items, users, images), 10, page)}

                    <Pagination
                        pageCount={Math.ceil(getPosts(items, users, images).length / 10)}
                    />
                </div>
            </div>
        </div>
    );
};

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
};

const mapDispatchToProps = (dispatch) => {
    return { 
      actions: bindActionCreators({
        fetchPosts
      }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);
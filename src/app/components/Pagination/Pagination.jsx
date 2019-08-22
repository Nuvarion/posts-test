import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPage } from 'app_redux/features/posts';

import './Pagination.scss';

const Pagination = ({ pageCount, page, actions }) => {

  const { setPage } = actions;

  return (
    <div className="d-flex justify-content-center">
        <ReactPaginate 

        // Данные
        pageCount={pageCount}
        forcePage={page}
        initialPage={page}
        onPageChange={({ selected }) => setPage(selected)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}

        // Стилизация
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        />
    </div>
  )
}

const mapStateToProps = ({ posts: { page }} ) => {
  return({
    page
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        setPage
      }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);


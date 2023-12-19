import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'; 

interface PaginationProps {
  lastPage: number;
  handlePageClick: (data: { selected: number }) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ lastPage, handlePageClick, currentPage }) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={lastPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination-link-previous'}
        nextLinkClassName={'pagination-link-next'}
        disabledClassName={'pagination-link-disabled'}
        activeClassName={'pagination-link-active'}
        breakClassName={'pagination-link-ellipsis'}
      />
    </div>
  );
};

export default Pagination;

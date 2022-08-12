import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  let isPrevPageAvailable = true;
  let isNextPageAvailable = false;
  let textPrevBtn = '←';
  let textNextBtn = null;

  if (currentPage === 0) {
    isPrevPageAvailable = false;
    textPrevBtn = null;
  }

  if (currentPage < Math.ceil(totalItems / itemsPerPage) - 1) {
    isNextPageAvailable = true;
    textNextBtn = '→';
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {textPrevBtn}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {textNextBtn}
      </button>
    </div>
  );
};

export default Pagination;

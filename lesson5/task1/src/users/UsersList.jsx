import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';
import { currentPageSelector, usersListSelector } from './users.selectors';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {
  const usersPerPage = 3;

  const usersToDisplay = users.slice(currentPage * usersPerPage, usersPerPage * (currentPage + 1));

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={usersPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.number.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: usersActions.goNextPage,
  goPrev: usersActions.goPrevPage,
};

// option 1
// const connector = connect(mapState, mapDispatch);
// export default connector(UsersList);

// option 2
export default connect(mapState, mapDispatch)(UsersList);

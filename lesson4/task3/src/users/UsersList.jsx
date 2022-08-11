import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';

const UsersList = ({ users, nextPage, prevPage }) => {
  const { usersList, currentPage } = users.users;
  const usersPerPage = 3;

  const usersPageList = usersList.slice(
    currentPage * usersPerPage,
    usersPerPage * (currentPage + 1),
  );

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage + 1}
        totalItems={usersList.length}
        itemsPerPage={usersPerPage}
      />
      <ul className="users">
        {usersPageList.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: state,
  };
};

const mapDispatch = {
  nextPage: usersActions.nextPage,
  prevPage: usersActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);

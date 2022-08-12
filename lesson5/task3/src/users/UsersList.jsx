import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import {
  usersListSelector,
  filterTextSelector,
  filteredUsersListSelector,
} from './users.selectors';

import Filter from '../Filter';
import User from './User';

const UsersList = ({ usersList, filterText, filterUsers }) => {
  return (
    <div>
      <Filter filterText={filterText} count={usersList.length} onChange={filterUsers} />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

// const mapState = state => {
//   console.log('state: ', state);
//   console.log('state: users', state.users);

//   return {
//     usersList: filteredUsersListSelector(state),
//     filterText: filterTextSelector(state),
//   };
// };

// const mapDispatch = {
//   filterUsers: usersActions.filterUsers,
// };

// export default connect(mapState, mapDispatch)(UsersList);
export default UsersList;

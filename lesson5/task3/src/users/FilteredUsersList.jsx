import { connect } from 'react-redux';
import { filteredUsersListSelector, filterTextSelector } from './users.selectors';
import UsersList from './UsersList';
import { filterUsers } from './users.actions';

const mapState = state => {
  return {
    usersList: filteredUsersListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  filterUsers: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);

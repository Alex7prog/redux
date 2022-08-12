import { createSelector } from 'reselect';

export const usersListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filteredUsersListSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (usersLst, filterTxt) => {
    return usersLst.filter(user => user.name.toUpperCase().includes(filterTxt.toUpperCase()));
  },
);

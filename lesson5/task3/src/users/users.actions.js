export const FILTER_USERS = 'USERS/FILTER_USERS';

export const filterUsers = e => {
  return {
    type: FILTER_USERS,
    payload: {
      filterText: e.target.value,
    },
  };
};

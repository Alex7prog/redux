export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = user => {
  return {
    type: ADD,
    user,
  };
};

export const deleteUser = id => {
  return {
    type: DELETE,
    id,
  };
};

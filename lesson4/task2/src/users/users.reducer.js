import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case DELETE_USER: {
      const newUsersList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: newUsersList,
      };
    }
    default: // always!!!
      return state;
  }
};
export default usersReducer;

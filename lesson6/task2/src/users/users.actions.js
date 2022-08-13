export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';
import { getUserData } from './users.gateway';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

// action return obj
export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

// async action
// async action return function
export const fetchUserData = userName => {
  return function (dispatch, getState) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => dispatch(userDataRecieved(userData)));
  };
};

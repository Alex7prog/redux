import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { usersReducer } from './users.reducer';

const appReducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(usersReducer);

export default store;

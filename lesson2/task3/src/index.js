// Redux actions with data in payload
import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log('store: ', store.getState());
});

// test-data
store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'John' }));
store.dispatch(addUser({ id: 3, name: 'Katya' }));
store.dispatch(deleteUser(2));
store.dispatch(deleteUser(0));

// Combaining reducers
import store from './store';

import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => {
  console.log('store: ', store.getState());
});

// test-data
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'John' }));
store.dispatch(addUser({ id: 3, name: 'Katya' }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { name: 'Jack', age: 19 }));

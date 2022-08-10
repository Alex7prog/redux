// redux-dev-tools
import store, { increment, decrement } from './counter';

store.subscribe(() => {
  console.log('store: ', store.getState());
});

// test-data
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

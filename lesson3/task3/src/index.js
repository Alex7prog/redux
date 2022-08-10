// Redux Store more big
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { removeUser, setUser } from './user.actions';

store.subscribe(() => {
  console.log('store: ', store.getState());
});

console.log('store: ', store.getState());

// test-data
store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('ua'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 77, name: 'meat' }));
store.dispatch(addProduct({ id: 78, name: 'bread' }));
store.dispatch(removeProduct(77));
store.dispatch(removeProduct(78));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ name: 'Jack' }));
store.dispatch(removeUser());

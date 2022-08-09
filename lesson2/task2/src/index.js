// Counter + history - Redux

import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const handleIncrement = () => {
  store.dispatch(increment());
};

const handleDecrement = () => {
  store.dispatch(decrement());
};

const handleReset = () => {
  store.dispatch(reset());
};

incrementBtn.addEventListener('click', handleIncrement);
resetBtn.addEventListener('click', handleReset);
decrementBtn.addEventListener('click', handleDecrement);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + value, 0);
  const historyString = state.history.reduce(
    (acc, value) => (value > 0 ? `${acc}+${value}` : `${acc}${value}`),
    '',
  );

  resultElem.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});

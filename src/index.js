import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { incrementCounter, decrementCounter } from './actions';

console.log(store.getState());
store.dispatch(incrementCounter(10));
console.log(store.getState());
store.dispatch(decrementCounter(5));
console.log(store.getState());


ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();

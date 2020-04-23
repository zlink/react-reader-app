import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import { counter } from './reducers';

const reducers = combineReducers({ counter });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, loger)),
);

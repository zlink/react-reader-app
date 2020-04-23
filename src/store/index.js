import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import RootReducers from './reducers';

const reducers = combineReducers({ RootReducers });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, loger)),
);

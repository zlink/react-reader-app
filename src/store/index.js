import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import loger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, loger)),
);

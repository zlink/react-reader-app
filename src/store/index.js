import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import RootReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(RootReducers, composeEnhancers(applyMiddleware(thunk, loger)));

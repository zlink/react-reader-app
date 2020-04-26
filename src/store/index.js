import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loger from 'redux-logger';
import RootReducers from './reducers';

export default createStore(RootReducers, applyMiddleware(thunk, loger));

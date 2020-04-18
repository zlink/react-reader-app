import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Category from './containers/Category';
import Me from './containers/Me';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/me" component={Me} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

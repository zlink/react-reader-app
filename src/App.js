import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './utils/flexible';
import './mixin.scss';
import './globalStyle';
import store from './store';
import Home from './containers/Home';
import Ebook from './containers/Ebook';
import Me from './containers/Me';
import Shelf from './containers/Shelf';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shelf" component={Shelf} />
        <Route path="/ebook" component={Ebook} />
        <Route path="/me" component={Me} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

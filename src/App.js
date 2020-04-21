import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './containers/Home';
import Me from './containers/Me';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/me" component={Me} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

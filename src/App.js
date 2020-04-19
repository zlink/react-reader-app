import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Me from './containers/Me';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/me" component={Me} />
    </Switch>
  </Router>
);

export default App;

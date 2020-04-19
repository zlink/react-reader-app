import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from "./serviceWorker";
import "./utils/flexible";
import "./index.scss";
import Home from './containers/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

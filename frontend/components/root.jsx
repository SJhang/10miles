import React, { PropTypes } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './app';

const Root = (props) => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <App/>
      </Switch>
    </Router>
  )
}

export default Root;

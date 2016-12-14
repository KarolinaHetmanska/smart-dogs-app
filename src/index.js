import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css';

import { App } from './App';
import { NotFoundView } from './NotFoundView';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>

    </Route>
    <Route path="*" component={NotFoundView} />
  </Router>,
  document.getElementById('root')
);

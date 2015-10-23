import React from 'react/addons';
import { Router, Route, Link } from 'react-router';

import Home from './Home.js';

import config from '../../../config/app';

var AppRoot = (
  <Router>
   <Route path='/' component={Home} />
  </Router>
);

export default AppRoot;

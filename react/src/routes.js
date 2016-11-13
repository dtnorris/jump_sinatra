import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import JumpIndex from './components/JumpIndex';
import JumpNew from './components/JumpNew';

let routes = (
  <Route path="app/" component={Layout}>
    <Route path="dashboard" component={Dashboard} />
    <Route path="jumps" component={JumpIndex} />
    <Route path="jumps/new" component={JumpNew} />
  </Route>
);

export default routes;

import React from 'react';
import { Router } from 'react-router';

const AppRoot = ({browserHistory, routes}) => {
  return(
    <Router history={browserHistory} routes={routes} />
  )
}

export default AppRoot;

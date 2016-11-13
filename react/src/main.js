import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import routes from './routes';
import AppRoot from './components/AppRoot';

let reactAppRender = (element) => {
  ReactDOM.render(
    <AppRoot browserHistory={browserHistory} routes={routes} />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('react-app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});

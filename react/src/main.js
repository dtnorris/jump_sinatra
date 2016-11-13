import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AppRoot from './components/AppRoot';
import { jumpLogApp } from './jumpLogApp';

let store = createStore(jumpLogApp);

let reactAppRender = (element) => {
  ReactDOM.render(
    <AppRoot store={store} />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('react-app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});

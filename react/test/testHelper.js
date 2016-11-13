import { shallow, mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { browserHistory } from 'react-router';
import simulateIfPresent from './support/simulateIfPresent';
import clickLink from './support/clickLink';
import routes from 'routes';

Object.assign(global, {
  jasmineEnzyme,
  React,
  mount,
  shallow,
  browserHistory,
  routes,
  simulateIfPresent,
  clickLink
});

beforeEach(() => {
  jasmineEnzyme();
  browserHistory.push('/app/');
});

afterEach(() => {
  browserHistory.push('/app/');
})

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);

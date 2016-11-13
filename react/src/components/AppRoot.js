import React from 'react';
import { Provider } from 'react-redux';
import JumpIndexContainer from '../containers/JumpIndexContainer';

let AppRoot = ({store}) => {
  return (
    <Provider store={store}>
      <JumpIndexContainer />
    </Provider>
  );
};

export default AppRoot;

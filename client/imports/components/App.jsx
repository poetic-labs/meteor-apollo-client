/* eslint-disable */
import React from 'react';
import Index from './Index';
import { Stack } from 'react-super-components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack index="path">
          <Index index="" />
          <div />
        </Stack>
      </Provider>
      );
  }
}
;

export default App;

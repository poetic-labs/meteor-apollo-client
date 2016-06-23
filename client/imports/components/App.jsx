/* eslint-disable */
import React from 'react';
import Index from './Index';
import { Stack } from 'react-super-components';
import { ApolloProvider } from 'react-apollo';
import store, { apolloClient } from '../store';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={apolloClient}>
        <Stack index="path">
          <Index index="" />
          <div />
        </Stack>
      </ApolloProvider>
      );
  }
}
;

export default App;

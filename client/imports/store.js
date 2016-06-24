/* eslint-disable */
import { Meteor } from 'meteor/meteor';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const networkInterface = createNetworkInterface('http://localhost:4000/graphql');

export const apolloClient = new ApolloClient({
  networkInterface,
});

export default createStore(
  combineReducers({
    routes: reducers,
    apollo: apolloClient.reducer(),
  }),
  applyMiddleware(thunk, apolloClient.middleware())
);

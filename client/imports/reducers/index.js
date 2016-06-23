/* eslint-disable */
import { combineReducers } from 'redux';
import index from './index/index';

export default (state = {}, action) => {
  switch (action.type) {
    case 'REDUCERS_INITIALIZE':
      return action.value;
    default:
      return combineReducers({
        index
      })(state, action);
  }
}

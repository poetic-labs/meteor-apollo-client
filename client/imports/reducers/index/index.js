/* eslint-disable */
import { combineReducers } from 'redux';
import checkbox2 from './checkbox-2';
import checkbox3 from './checkbox-3';
import checkbox from './checkbox';
import field from './field';

export default (state = {}, action) => {
  switch (action.type) {
    case 'INDEX_INITIALIZE':
      return action.value;
    default:
      return combineReducers({
checkbox2,
checkbox3,
checkbox,
field
      })(state, action);
  }
}

/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function field(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.index.changeField:
      return action.value;
    default:
      return state;
  }
}

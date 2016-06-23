/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function checkbox(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.index.toggleCheckbox:
      return !state;
    default:
      return state;
  }
}

/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function checkbox3(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.index.toggleCheckbox3:
      return !state;
    default:
      return state;
  }
}

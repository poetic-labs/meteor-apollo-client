/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function checkbox2(state = false, action) {
  switch (action.type) {
    case actionTypeConstants.index.toggleCheckbox2:
      return !state;
    default:
      return state;
  }
}

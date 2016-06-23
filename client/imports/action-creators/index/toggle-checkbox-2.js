/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function toggleCheckbox2(event) {
  return {
    type: actionTypeConstants.index.toggleCheckbox2,
    value: event.target.value
  };
}

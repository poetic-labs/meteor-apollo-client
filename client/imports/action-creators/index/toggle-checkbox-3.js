/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function toggleCheckbox3(event) {
  return {
    type: actionTypeConstants.index.toggleCheckbox3,
    value: event.target.value
  };
}

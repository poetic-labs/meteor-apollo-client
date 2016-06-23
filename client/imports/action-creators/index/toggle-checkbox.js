/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function toggleCheckbox(event) {
  return {
    type: actionTypeConstants.index.toggleCheckbox,
    value: event.target.value
  };
}

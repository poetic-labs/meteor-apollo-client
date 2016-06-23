/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeField(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.index.changeField,
    value: event.target.value
  };
}

/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function submitEmailForm2(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.index.submitEmailForm2,
    value: event.target.value
  };
}

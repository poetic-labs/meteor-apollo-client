/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class Index extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="list-container">
          <div className="w-form">
            <form data-name="Email Form"
              id="email-form"
              name="email-form"
              onSubmit={this.props['action.index.submitEmailForm']}>
              <input autofocus="autofocus"
                id="field"
                maxlength="256"
                name="field"
                placeholder="What needs to be done?"
                type="text"
                className="w-input todo-input"
                value={this.props['state.index.field']}
                onChange={this.props['action.index.changeField']} />
            </form>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
          <div className="w-form form-wrapper">
            <form data-name="Email Form 2"
              id="email-form-2"
              name="email-form-2"
              className="form"
              onSubmit={this.props['action.index.submitEmailForm2']}>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Checkbox"
                  id="checkbox"
                  name="checkbox"
                  type="checkbox"
                  className="w-checkbox-input display-none"
                  checked={this.props['state.index.checkbox']}
                  onChange={this.props['action.index.toggleCheckbox']} />
                <label data-ix="new-interaction" className="w-form-label checkbox-label" htmlFor="checkbox">
                  dummy text of the printing and typesetting industry.
                </label>
                <a href="#" className="w-inline-block trash"><img src="images/trash.svg" /></a>
              </div>
            </form>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
          <div className="w-form form-wrapper">
            <form data-name="Email Form 2"
              id="email-form-2"
              name="email-form-2"
              className="form"
              onSubmit={this.props['action.index.submitEmailForm2']}>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Checkbox 3"
                  id="checkbox-3"
                  name="checkbox-3"
                  type="checkbox"
                  className="w-checkbox-input display-none"
                  checked={this.props['state.index.checkbox3']}
                  onChange={this.props['action.index.toggleCheckbox3']} />
                <label data-ix="new-interaction" className="w-form-label checkbox-label" htmlFor="checkbox-3">
                  dummy text of the printing and
                </label>
                <a href="#" className="w-inline-block trash"><img src="images/trash.svg" /></a>
              </div>
            </form>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
          <div className="w-form form-wrapper">
            <form data-name="Email Form 2"
              id="email-form-2"
              name="email-form-2"
              className="form"
              onSubmit={this.props['action.index.submitEmailForm2']}>
              <div className="w-checkbox w-clearfix checkbox-field">
                <input data-name="Checkbox 2"
                  id="checkbox-2"
                  name="checkbox-2"
                  type="checkbox"
                  className="w-checkbox-input display-none"
                  checked={this.props['state.index.checkbox2']}
                  onChange={this.props['action.index.toggleCheckbox2']} />
                <label data-ix="new-interaction" className="w-form-label checkbox-label" htmlFor="checkbox-2">
                  dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </label>
                <a href="#" className="w-inline-block trash"><img src="images/trash.svg" /></a>
              </div>
            </form>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
;
const IndexWithRedux = reduxConnect(
  (state) => ({
    'state.index.field': state.index.field,
    'state.index.checkbox': state.index.checkbox,
    'state.index.checkbox3': state.index.checkbox3,
    'state.index.checkbox2': state.index.checkbox2
  }),
  {
    'action.index.submitEmailForm': action.index.submitEmailForm,
    'action.index.changeField': action.index.changeField,
    'action.index.submitEmailForm2': action.index.submitEmailForm2,
    'action.index.toggleCheckbox': action.index.toggleCheckbox,
    'action.index.submitEmailForm2': action.index.submitEmailForm2,
    'action.index.toggleCheckbox3': action.index.toggleCheckbox3,
    'action.index.submitEmailForm2': action.index.submitEmailForm2,
    'action.index.toggleCheckbox2': action.index.toggleCheckbox2
  }
)(Index);

export default IndexWithRedux;

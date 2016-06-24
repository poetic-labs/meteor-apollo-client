/* eslint-disable */
import React from 'react';
import { connect as apolloConnect } from 'react-apollo';
import action from '../action-creators/index';
import store from '../store';
import gql from 'apollo-client/gql';

class Index extends React.Component {
  componentWillMount() {
    console.log('mounted', this.props)
  }
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
                value={this.props['state.routes.index.field']}
                onChange={e => {
                  console.log(this.props.todos.todos)
                  //this.props['action.index.changeField']
                }} />
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

          {this.props.todos.todos ? this.props.todos.todos.map(todo => {
            const htmlId = `checkbox-${todo.id}`;
            return (
              <div key={todo.id} className="w-form form-wrapper">
                <form data-name="Email Form 2"
                  id="email-form-2"
                  name="email-form-2"
                  className="form"
                  onSubmit={this.props['action.index.submitEmailForm2']}>
                  <div className="w-checkbox w-clearfix checkbox-field">
                    <input data-name="Checkbox"
                      id={htmlId}
                      name={htmlId}
                      type="checkbox"
                      className="w-checkbox-input display-none"
                      checked={todo.completed}
                      onChange={e => {
                        console.log('called')
                        this.props.mutations.toggleTodoCompleted(todo.id);
                      }} />
                    <label data-ix="new-interaction" className="w-form-label checkbox-label" htmlFor={htmlId}>
                      {todo.title}
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
            )
          }) : ''}
        </div>
      </div>
    );
  }
}
;

const mapQueriesToProps = ({ ownProps, state }) => {
  return {
    todos: {
      query: gql`
        {
          todos {
            id,
            title,
            completed
          }
        }
      `,
      pollInterval: 500,
    },
  };
};

const mapMutationsToProps = ({ ownProps, state }) => {
  return {
    toggleTodoCompleted(id) {
      return {
        mutation: gql`
          mutation toggleTodoCompleted(
            $id: Int!
          ) {
            toggleTodoCompleted(id: $id) {
              id
            }
          }
        `,
        variables: { id },
      };
    }
  };
};

const IndexWithRedux = apolloConnect({
  mapQueriesToProps,
  mapMutationsToProps,
})(Index);
//const IndexWithRedux = apolloConnect(
  //(state) => ({
    //'state.routes.index.field': state.routes.index.field,
    //'state.routes.index.checkbox': state.routes.index.checkbox,
    //'state.routes.index.checkbox3': state.routes.index.checkbox3,
    //'state.routes.index.checkbox2': state.routes.index.checkbox2
  //}),
  //{
    //'action.index.submitEmailForm': action.index.submitEmailForm,
    //'action.index.changeField': action.index.changeField,
    //'action.index.submitEmailForm2': action.index.submitEmailForm2,
    //'action.index.toggleCheckbox': action.index.toggleCheckbox,
    //'action.index.submitEmailForm2': action.index.submitEmailForm2,
    //'action.index.toggleCheckbox3': action.index.toggleCheckbox3,
    //'action.index.submitEmailForm2': action.index.submitEmailForm2,
    //'action.index.toggleCheckbox2': action.index.toggleCheckbox2
  //}
//)(Index);

export default IndexWithRedux;

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import style from './App.css';
import InfoGraphView from '../components/InfoGraph/infographView';

library.add(faStroopwafel);
library.add(faAddressBook);

@connect(
  state => ({
    todos: state.todos,
    routes: state.routes
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions, routes } = this.props;
    let view = <MainSection todos={todos} actions={actions} />;
    if (routes.route === 'infograph') {
      view = <InfoGraphView />;
    }

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        { view }
      </div>
    );
  }
}

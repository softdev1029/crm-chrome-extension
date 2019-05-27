import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAddressBook, faChartLine, faSocks, faBuilding, faBook, faCity, faLandmark, faClipboard } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/layout/Header';
import MainSection from '../components/layout/MainSection';
import * as TodoActions from '../actions/todos';
import style from './App.css';
import InfoGraphView from '../components/InfoGraph/infographView';

library.add(faAddressBook);
library.add(faChartLine);
library.add(faSocks);
library.add(faBuilding);
library.add(faBook);
library.add(faCity);
library.add(faLandmark);
library.add(faClipboard);

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

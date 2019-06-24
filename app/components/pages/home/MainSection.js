import React, { Component, PropTypes } from 'react';
import MainItem from '../../molecules/home/MainItem/MainItem';
import style from './MainSection.css';

export default class MainSection extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todos, actions } = this.props;

    return (
      <section className={style.main}>
        <ul className={style.todoList}>
          {todos.map(todo =>
            <MainItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

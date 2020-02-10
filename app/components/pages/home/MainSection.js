import React, { Component, PropTypes } from 'react';
import Button from '@material-ui/core/Button';
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
      <div>
        <div className={style.credit_box}>
          <h2 className={style.credit_num_suffix}>Credits: 100</h2>
          <Button variant="outlined" size="small" style={{ textTransform: 'none', color: '#007a8c', borderColor: '#007a8c' }}>
            Add credits
          </Button>
        </div>
        <section className={style.main}>
          <ul className={style.todoList}>
            {todos.map(todo =>
              <MainItem key={todo.id} todo={todo} {...actions} />
            )}
          </ul>
        </section>
      </div>
    );
  }
}

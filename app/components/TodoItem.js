import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './TodoItem.css';
import InfoGraph from './InfoGraph/InfoGraph';

export default class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleToggleInfoGraph = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { todo } = this.props;
    const { editing } = this.state;

    return (
      <li
        className={classnames(
          style.normal,
        )}
      >
        <div className={style.view}>
          <label
            onClick={this.handleToggleInfoGraph}
            data-status={editing}
          >
            {todo.text}
          </label>
        </div>
        {
          editing && <InfoGraph />
        }
      </li>
    );
  }
}

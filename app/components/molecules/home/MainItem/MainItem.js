import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './MainItem.css';

export default class TodoItem extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
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
        <div className={style.collapse}>
          <label
            onClick={this.handleToggleInfoGraph}
            data-status={editing}
          >
            {todo.text}
          </label>
        </div>
      </li>
    );
  }
}

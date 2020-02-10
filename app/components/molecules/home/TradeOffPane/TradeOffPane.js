import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './TradeOffPane.css';
import TradeOff from '../TradeOff/TradeOff';

export default class TradeOffPane extends Component {

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
        {
          editing && <TradeOff />
        }
      </li>
    );
  }
}

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
            title="A trade-off analysis is a business decision that &#10;involves losing one area in return for gains in &#10;another area. In simple terms, a tradeoff is where &#10;because one business consideration increases &#10;another consideration must decrease."
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

import React, { Component, PropTypes } from 'react';
import style from './TextBox.css';

export default class TextBox extends Component {

  static propTypes = {
    value: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const { value, } = this.props;

    return (
      <input type="text" value={value} className={style.main} />
    );
  }
}

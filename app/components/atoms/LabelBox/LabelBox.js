import React, { Component, PropTypes } from 'react';
import style from './LabelBox.css';

export default class LabelBox extends Component {

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
      <span value={value} className={style.main}>{value}</span>
    );
  }
}

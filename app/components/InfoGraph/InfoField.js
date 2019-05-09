import React, { Component, PropTypes } from 'react';
// import classnames from 'classnames';
import style from './InfoField.css';

export default class InfoField extends Component {

  static propTypes = {
    infoGraph: PropTypes.object.isRequired,
    // editInfoGraph: PropTypes.func.isRequired,
    // completeInfoGraph: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    // const { infoGraph } = this.props;

    return (
      <div className={style.main}>
        <div>Field: </div>
        <input type="text" />
      </div>
    );
  }
}

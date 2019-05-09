import React, { Component, PropTypes } from 'react';
// import classnames from 'classnames';
import InfoField from './InfoField';
import SubmitButton from './SubmitButton';
import style from './InfoField.css';

export default class InfoGraph extends Component {

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
        <InfoField />
        <InfoField />
        <InfoField />
        <SubmitButton />
      </div>
    );
  }
}

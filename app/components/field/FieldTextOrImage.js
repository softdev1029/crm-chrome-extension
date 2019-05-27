import React, { Component, PropTypes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classnames from 'classnames';
import style from './FieldTextOrImage.css';
import TextBox from '../atom/TextBox';
import LabelBox from '../atom/LabelBox';

export default class InfoField extends Component {

  static propTypes = {
    // infoGraph: PropTypes.object.isRequired,
    // editInfoGraph: PropTypes.func.isRequired,
    // completeInfoGraph: PropTypes.func.isRequired
    title: PropTypes.object.isRequired,
    icon: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const { title, icon } = this.props;

    return (
      <div className={style.main}>
        <FontAwesomeIcon icon={icon} />
        <LabelBox className={style.title} value={title} />
        <TextBox />
      </div>
    );
  }
}

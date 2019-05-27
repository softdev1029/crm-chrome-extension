import React, { Component, PropTypes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import classnames from 'classnames';
import style from './FieldImage.css';
import LabelBox from '../atom/LabelBox';

export default class FieldImage extends Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
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
      </div>
    );
  }
}

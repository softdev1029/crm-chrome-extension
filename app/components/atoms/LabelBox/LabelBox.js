import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import style from './LabelBox.css';
import * as RouteAction from '../../../actions/routes';

class LabelBox extends Component {

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

export default connect(
  state => ({
    routes: state.routes
  }),
  dispatch => ({
    actions: bindActionCreators(RouteAction, dispatch)
  })
)(LabelBox);

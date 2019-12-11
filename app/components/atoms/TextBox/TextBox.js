import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import style from './TextBox.css';
import * as RouteAction from '../../../actions/routes';

class TextBox extends Component {

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

export default connect(
  state => ({
    routes: state.routes
  }),
  dispatch => ({
    actions: bindActionCreators(RouteAction, dispatch)
  })
)(TextBox);

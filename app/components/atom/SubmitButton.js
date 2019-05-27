import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import style from './SubmitButton.css';
import * as RouteAction from '../../actions/routes';

@connect(
  state => ({
    routes: state.routes
  }),
  dispatch => ({
    actions: bindActionCreators(RouteAction, dispatch)
  })
)
export default class SubmitButton extends Component {

  static propTypes = {
    actions: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const { actions, } = this.props;

    return (
      <div className={style.main}>
        <button className={style.submit} onClick={() => actions.gotoInfoGraph()} name="Submit">Submit</button>
      </div>
    );
  }
}

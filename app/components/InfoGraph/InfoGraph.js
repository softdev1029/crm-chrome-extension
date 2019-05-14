import React, { Component, PropTypes } from 'react';
// import classnames from 'classnames';
import InfoField from './InfoField';
import SubmitButton from './SubmitButton';
import style from './InfoField.css';
import * as RouteAction from '../../actions/routes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(
  state => ({
    routes: state.routes
  }),
  dispatch => ({
    actions: bindActionCreators(RouteAction, dispatch)
  })
)
export default class InfoGraph extends Component {

  static propTypes = {
    infoGraph: PropTypes.object.isRequired,
    // editInfoGraph: PropTypes.func.isRequired,
    // completeInfoGraph: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value1: "",
      value2: ""
    };
  }

  onChangeValue(event) {
    //debugger
    //event.target.value
    //event.target.name
    this.setState({[event.target.name]: event.target.value});
  }

  gotoInforGraph() {
    var data = {
      value1: this.state.value1,
      value2: this.state.value2
    };
    this.props.actions.addValues(data);
    this.props.actions.gotoInfoGraph(data);
  }

  render() {
    return (
      <div className={style.main}>
        <div style={{textAlign: "center"}}>
          <div style={{padding: "10px 0"}}>
            <span>Value 1: </span>
            <input type="text" value={this.state.value1} onChange={(event) => this.onChangeValue(event)} name="value1" />
          </div>
          <div style={{padding: "10px 0"}}>
            <span>Value 1: </span>
            <input type="text" value={this.state.value2} onChange={(event) => this.onChangeValue(event)} name="value2" />
          </div>
        </div>
        <div className={style.submitmain}>
          <button className={style.submit} onClick={() => this.gotoInforGraph()} name="Submit">Submit</button>
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import InfoFieldImage from './InfoFieldImage';
import InfoFieldText from './InfoFieldText';
import InfoFieldTextOrImage from './InfoFieldTextOrImage';
// import SubmitButton from './SubmitButton';
import style from './InfoGraph.css';
import * as RouteAction from '../../actions/routes';

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
    // infoGraph: PropTypes.object.isRequired,
    // editInfoGraph: PropTypes.func.isRequired,
    // completeInfoGraph: PropTypes.func.isRequired
    actions: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value1: '',
      value2: ''
    };
  }

  onChangeValue(event) {
    //debugger
    //event.target.value
    //event.target.name
    this.setState({ [event.target.name]: event.target.value });
  }

  gotoInforGraph() {
    const data = {
      value1: this.state.value1,
      value2: this.state.value2
    };
    this.props.actions.addValues(data);
    this.props.actions.gotoInfoGraph(data);
  }

  render() {
    return (
      <div className={style.main}>
        <div>
          A trade-off analysis is a business decision
          that involves losing one area in return for gains in another area.
          In simple terms, a tradeoff is where
          because one business consideration increases another consideration must decrease.
        </div>
        <InfoFieldImage title="Company Logo:" type="rep" />
        <InfoFieldImage title="Prospect's Logo:" type="prospect" />
        <InfoFieldText title="Prospect's First Name:" type="prospect-first-name" />
        <InfoFieldText title="Text:" type="text" />
        <InfoFieldText title="Text:" type="text" />
        <InfoFieldText title="Chart: Business Consideration No. 1: " type="text" />
        <InfoFieldText title="Chart: Business Consideration No. 2: " type="text" />
        <InfoFieldText title="Text:" type="text" />
        <InfoFieldTextOrImage title="Product:" type="text" />
        <InfoFieldText title="Text:" type="text" />
        <div style={{ textAlign: 'center' }}>
          <div style={{ padding: '10px 0' }}>
            <span>Value 1: </span>
            <input type="text" value={this.state.value1} onChange={event => this.onChangeValue(event)} name="value1" />
          </div>
          <div style={{ padding: '10px 0' }}>
            <span>Value 1: </span>
            <input type="text" value={this.state.value2} onChange={event => this.onChangeValue(event)} name="value2" />
          </div>
        </div>
        <div className={style.submitmain}>
          <button className={style.submit} onClick={() => this.gotoInforGraph()} name="Submit">Submit</button>
        </div>
      </div>
    );
  }
}

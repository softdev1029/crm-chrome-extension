import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import InfoFieldImage from '../../../molecules/common/FieldImage/FieldImage';
import InfoFieldText from '../../../molecules/common/FieldText/FieldText';
import InfoFieldTextOrImage from '../../common/FieldTextOrImage/FieldTextOrImage';
import style from './TradeOff.css';
import * as RouteAction from '../../../../actions/routes';

class TradeOff extends Component {

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
    const classes = makeStyles(theme => ({
      margin: {
        margin: theme.spacing(1),
      },
    }));

    return (
      <div className={style.main}>
        <div className={style.head}>
          A trade-off analysis is a business decision
          that involves losing one area in return for gains in another area.
          In simple terms, a tradeoff is where
          because one business consideration increases another consideration must decrease.
        </div>
        {/* Company Logo */}
        <InfoFieldImage title="Company Logo:" icon="building" />

        {/* Prospect Logo */}
        <InfoFieldImage title="Prospect's Logo:" icon="landmark" />

        {/* Prospect First Name */}
        <InfoFieldText title="Prospect's First Name:" icon="address-book" />

        {/* Explanation Sentence */}
        <InfoFieldText title="Text:" icon="book" value="Based on our understanding of your business situation, we have developed a trade off analysis to illustrate the business decisions you make in area A impact area B. A return in one area involves a potential cost in another area. You face competing business challenges:" />

        {/* Chart Values */}
        <InfoFieldText title="Consideration No. 1: " icon="chart-line" />
        <InfoFieldText title="Consideration No. 2: " icon="chart-line" />

        {/* Explanation Sentence */}
        <InfoFieldText title="Text:" icon="clipboard" value="Both of these values are competing for resource in your business" />
        <InfoFieldTextOrImage title="Product:" icon="socks" />
        <InfoFieldText title="Text:" icon="clipboard" value="can assist you by" />

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
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="outlined"
          size="small"
          disableElevation
          style={{ textTransform: 'none', color: '#007a8c', backgroundColor: '#eaf0f6', borderColor: '#007a8c' }}
          onClick={() => this.gotoInforGraph()}
        >
          Submit
        </Button>
      </div>
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
)(TradeOff);

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Description, InsertChart, Work } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import style from './TradeOff.css';
import * as RouteAction from '../../../../actions/routes';

const SellifyTextField = withStyles({
  root: {
    '&': {
      width: '205px'
    },
    '& label': {
      fontSize: '14px'
    },
    '& label.Mui-focused': {
      color: '#00b050',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00b050',
    },
    '& input': {
      fontSize: '14px',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #33475BDE',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00b050',
      },
    },
  },
})(TextField);

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
        margin: theme.spacing(1)
      },
    }));

    return (
      <div className={style.main}>
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Prospect's first name" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} title="Based on our conversation">
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Description size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Text" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Description size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Text" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <InsertChart size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Business Consideration No.1" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <InsertChart size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Business Consideration No.2" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Work size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Production" size="small" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} style={{ marginBottom: '10px' }} >
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Description size="small" />
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" label="Text" size="small" />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="outlined"
          size="small"
          disableElevation
          style={{ textTransform: 'none', color: '#00b050', backgroundColor: '#eaf0f6', borderColor: '#00b050' }}
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

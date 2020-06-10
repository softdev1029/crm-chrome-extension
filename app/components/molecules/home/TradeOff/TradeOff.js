import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, Description, InsertChart, Work } from '@material-ui/icons';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { postData } from '../../../../apis/apiList';

import style from './TradeOff.css';
import * as RouteAction from '../../../../actions/routes';
import * as PrintAction from '../../../../actions/prints';


const SellifyTextField = withStyles({
  root: {
    '&': {
      width: '240px',
      marginTop: '3px',
      marginBottom: '6px'
    },
    '& fieldset': {
      borderRadius: 0
    },
    '& label': {
      fontSize: '14px'
    },
    '& textarea': {
      fontSize: '14px'
    },
    '& label.Mui-focused': {
      color: '#00b050',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00b050',
    },
    '& input': {
      fontSize: '14px'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #33475BDE',
    },
    '& .MuiOutlinedInput-root': {
      height: '30px',
      '&.Mui-focused fieldset': {
        borderColor: '#00b050',
      },
    },
  },
})(TextField);

const SellifyMultiLineTextField = withStyles({
  root: {
    '&': {
      width: '240px',
      marginTop: '3px',
      marginBottom: '6px'
    },
    '& fieldset': {
      borderRadius: 0
    },
    '& label': {
      fontSize: '14px'
    },
    '& textarea': {
      fontSize: '14px'
    },
    '& label.Mui-focused': {
      color: '#00b050',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00b050',
    },
    '& input': {
      fontSize: '14px'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #33475BDE',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#00b050',
      },
    },
  },
})(TextField);

const SellifyTextFieldWithButton = withStyles({
  root: {
    '&': {
      width: '205px',
      marginTop: '3px',
      marginBottom: '6px'
    },
    '& label': {
      fontSize: '14px'
    },
    '& fieldset': {
      borderRadius: 0,
    },
    '& label.Mui-focused': {
      color: '#00b050',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00b050',
    },
    '& input': {
      fontSize: '14px'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #33475BDE',
    },
    '& .MuiOutlinedInput-root': {
      height: '30px',
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
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      understanding: '',
      baseline: '',
      improvement: '',
      product: ''
    };
  }

  onChangeValue(event) {
    //debugger
    //event.target.value
    //event.target.name
    this.setState({ [event.target.name]: event.target.value });
  }

  gotoInforGraph() {
    const missingProperties = {};
    if (this.state.name === '') {
      missingProperties.name = 'My Product';
    }
    if (this.state.understanding === '') {
      missingProperties.understanding = 'Different parts of your business are competing for resources, such that for every unit of cost.';
    }
    if (this.state.baseline === '') {
      missingProperties.baseline = 'Resources';
    }

    if (this.state.improvement === '') {
      missingProperties.improvement = 'Improve the underlying efficiency of your business so that the same unit of cost provides.';
    }

    if (this.state.product === '') {
      missingProperties.product = 'Sellify';
    }

    const data = Object.assign(this.state, missingProperties);
    this.setState(data);
    postData(data).then((res) => {
      chrome.windows.create({
        // eslint-disable-next-line no-underscore-dangle
        url: chrome.runtime.getURL(`window.html?popup=true&id=${res.data.id}`),
        type: 'popup'
      });
    });

    // this.props.actions.postPdfData(this.state);
    /*
    this.props.actions.addValues(data);
    this.props.actions.gotoInfoGraph(data);
    */
  }

  render() {
    const classes = makeStyles(theme => ({
      margin: {
        margin: theme.spacing(1)
      },
    }));

    return (
      <div className={style.main}>
        <div className={classes.margin} title="This text is saved automatically.">
          <Grid container alignItems="flex-end">
            <Grid item style={{ color: '#33475B' }}>
              <AccountCircle size="small" />
            </Grid>
            <Grid item>
              <div style={{ paddingBottom: '7px', paddingLeft: '5px', fontSize: '16px', color: '#33475B', fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji' }} >Prospect's first name:</div>
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" variant="outlined" name="name" value={this.state.name} onChange={(e) => { this.onChangeValue(e); }} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} title="Based on our converstaion. &#10;This template is saved automatically.">
          <Grid container alignItems="flex-end">
            <Grid item style={{ color: '#33475B' }}>
              <Description size="small" />
            </Grid>
            <Grid item>
              <div style={{ paddingBottom: '7px', paddingLeft: '5px', fontSize: '16px', color: '#33475B', fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji' }} >Text:</div>
            </Grid>
            <Grid item>
              <SellifyMultiLineTextField id="input-with-icon-grid" variant="outlined" multiline rowsMax="5" size="small" name="understanding" value={this.state.understanding} onChange={(e) => { this.onChangeValue(e); }} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} title="What is the baseline metric or resource &#10;your product/service aims to improve? &#10;This text is saved automatically.">
          <Grid container alignItems="flex-end">
            <Grid item style={{ color: '#33475B' }}>
              <InsertChart size="small" />
            </Grid>
            <Grid item>
              <div style={{ paddingBottom: '7px', paddingLeft: '5px', fontSize: '16px', color: '#33475B', fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji' }} >Baseline metric:</div>
            </Grid>
            <Grid item>
              <SellifyTextField id="input-with-icon-grid" variant="outlined" size="small" name="baseline" value={this.state.baseline} onChange={(e) => { this.onChangeValue(e); }} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} title="This text is saved automatically.">
          <Grid container alignItems="flex-end">
            <Grid item style={{ color: '#33475B' }}>
              <Work size="small" />
            </Grid>
            <Grid item>
              <div style={{ paddingBottom: '7px', paddingLeft: '5px', fontSize: '16px', color: '#33475B', fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji' }} >Product/Service being pitched:</div>
            </Grid>
            <Grid item>
              <SellifyTextFieldWithButton id="input-with-icon-grid" variant="outlined" size="small" name="product" value={this.state.product} onChange={(e) => { this.onChangeValue(e); }} />
            </Grid>
            <Grid item>
              <AddAPhotoIcon size="small" style={{ color: '#33475B', marginBottom: '7px' }} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin} title="Based on our understanding. &#10;This template is saved automatically.">
          <Grid container alignItems="flex-end">
            <Grid item style={{ color: '#33475B' }}>
              <Description size="small" />
            </Grid>
            <Grid item>
              <div style={{ paddingBottom: '7px', paddingLeft: '5px', fontSize: '16px', color: '#33475B', fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji' }} >Text:</div>
            </Grid>
            <Grid item>
              <SellifyMultiLineTextField id="input-with-icon-grid" variant="outlined" multiline rowsMax="5" size="small" name="improvement" value={this.state.improvement} onChange={(e) => { this.onChangeValue(e); }} />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="outlined"
          size="small"
          disableElevation
          style={{ textTransform: 'none', color: '#00b050', backgroundColor: '#eaf0f6', borderColor: '#00b050', marginTop: '15px' }}
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
    actions: bindActionCreators(Object.assign(RouteAction, PrintAction), dispatch)
  })
)(TradeOff);

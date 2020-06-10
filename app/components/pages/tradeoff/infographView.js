import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import * as RouteAction from '../../../actions/routes';
import style from './infographView.css';


// we need inline as PDF export required it
const ctdiv = {
  height: '300px',
  'text-align': 'center'
};

const subbutton = {
  border: '2px solid gray',
  padding: '5px',
  'margin-bottom': '20px',
  'margin-left': '200px',
  color: 'green'
};

const topdiv = {
  width: 0,
  height: 0,
  'border-style': 'solid',
  'border-width': '200px 400px 0 0',
  'border-color': '#78CED7 transparent transparent transparent',
  margin: 'auto'
};

const bottomdiv = {
  width: 0,
  height: 0,
  'border-style': 'solid',
  'border-width': '0 0 200px 400px',
  'border-color': 'transparent transparent #90C549 transparent',
  position: 'relative',
  top: '-198px',
  margin: 'auto'
};

const gtdivinner = {
  width: '100%',
  position: 'relative',
  height: '260px',
  'border-left': '2px solid',
  'margin-bottom': '20px',
  'border-bottom': '2px solid'
};

const rbddiv = {
  width: '260px',
  height: '183px',
  position: 'relative',
  top: '77px',
  'border-top': '2px dashed red',
  'border-right': '2px dashed red'
};

const ppad = {
  color: 'rgb(51, 71, 91)',
  paddingLeft: '30px',
  paddingRight: '30px'
};

const gtddiv1 = {
  width: '228px',
  height: '78',
  position: 'relative',
  top: '-3px',
  'border-top': '2px dashed green',
  'border-right': '2px dashed green'
};

const gtddiv2 = {
  width: '165px',
  height: '123px',
  position: 'relative',
  top: '-128px',
  'border-top': '2px dashed green',
  'border-right': '2px dashed green'
};

const svgstyle = { position: 'absolute', top: '0px' };
const svgstyle2 = { position: 'absolute', top: '90px' };
const pathcss = {
  'stroke-width': '2px',
  stroke: 'red',
  'stroke-linecap': 'round',
  fill: 'none'
};

const img1s = {
  width: '60px;',
  position: 'absolute;',
  left: '-70px;',
  top: '150px;'
};

const img2s = {
  width: '60px;',
  position: 'absolute;',
  left: '-70px;',
  top: '150px;'
};

class InfoGraphView extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.document = null;
    this.pdfButton = null;
    this.outputd1 = null;
    this.outputd2 = null;
  }

  componentDidMount() {
    this.outputd1.style.display = 'none';
    this.outputd2.style.display = 'none';

    const { routes } = this.props;
    axios({
      method: 'get',
      url: `https://sellify-app.herokuapp.com/?id=${routes.formvalues.id}`
    }).then((res) => {
      this.setState(res.data);
    });
  }

  exportPDF() {
    this.pdfButton.style.display = 'none';
    window.print();
    setTimeout(() => {
      this.pdfButton.style.display = 'block';
    }, 100);
  }

  loadFile(event, type) {
    if (type === 1) {
      this.outputd1.src = URL.createObjectURL(event.target.files[0]);
      this.outputd1.style.display = 'block';
      this.outputd1.style.width = '60px';
      this.outputd1.style.position = 'absolute';
      this.outputd1.style.left = '-70px';
      this.outputd1.style.top = '150px';
      this.filei1.style.display = 'none';
    } else if (type === 2) {
      this.outputd2.src = URL.createObjectURL(event.target.files[0]);
      this.outputd2.style.display = 'block';
      this.outputd2.style.width = '60px';
      this.outputd2.style.position = 'absolute';
      this.outputd2.style.right = '-25px';
      this.outputd2.style.top = '50px';
      this.filei2.style.display = 'none';
    }
    //var output = document.getElementById('output');
    //output.src = URL.createObjectURL(event.target.files[0]);
  }

  render() {
    const { name, understanding, baseline, product, improvement } = this.state;
    return (
      <div>
        <div ref={r => this.document = r}>
          <p style={ppad}>
            Dear {name}
          </p>
          <p style={ppad}>
            Based on our conversation.
            {understanding}
          </p>
          <p style={ppad}>
            you can only produce a given amount of resource
          </p>
          <div style={ctdiv}>
            <div><h3>TradOff Chart</h3></div>
            <div style={topdiv} />
            <div style={bottomdiv} />
          </div>
          <p style={ppad}>
            Based on our understanding.
            {product}
          </p>
          <p style={ppad}>
            {improvement}
          </p>
          <p style={ppad}>
            A higher value in terms of {baseline}
          </p>
          <div className={style.gtdiv}>
            <div style={gtdivinner}>
              <label style={{ position: 'absolute', left: '-52px' }}>cost</label>
              <label style={{ position: 'absolute', right: '-52px', bottom: '0' }}>{baseline}</label>
              <img id="output1" style={img1s} ref={c => this.outputd1 = c} />
              <img id="output2" style={img2s} ref={c => this.outputd2 = c} />
              <div style={rbddiv} />
              <div style={gtddiv1} />
              <div style={gtddiv2} />
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={svgstyle}>
                <path xmlns="http://www.w3.org/2000/svg" style={pathcss} id="curve" d="M0,1 C266,26 465,104 380,720" />
              </svg>
              <svg width="100%" height="66%" xmlns="http://www.w3.org/2000/svg" style={svgstyle2}>
                <path xmlns="http://www.w3.org/2000/svg" style={pathcss} id="curve" d="M0,10 C216,26 265,104 280,230" />
              </svg>

            </div>
          </div>
          <div>
            <button ref={b => this.pdfButton = b} style={subbutton} onClick={() => this.exportPDF()}>Export PDF</button>
          </div>
        </div>
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
)(InfoGraphView);

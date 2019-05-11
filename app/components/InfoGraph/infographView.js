import React, { Component, PropTypes } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as RouteAction from '../../actions/routes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



// we need inline as PDF export required it
const ctdiv  = {
    height: "300px",
    "text-align": "center"
  }
  
const subbutton = {
    border: "2px solid gray",
    padding: "5px",
    "margin-bottom": "20px",
    "margin-left": "200px",
    color: "green"
}

  const topdiv  = {
    width: 0,
    height: 0,
    "border-style": "solid",
    "border-width": "200px 400px 0 0",
    "border-color": "#78CED7 transparent transparent transparent",
    "margin": "auto"
  }
  
  const bottomdiv  = {
    width: 0,
    height: 0,
    "border-style": "solid",
    "border-width": "0 0 200px 400px",
    "border-color": "transparent transparent #90C549 transparent",
    "position": "relative",
    "top": "-198px",
    "margin": "auto"
  }
  
  const gtdiv  = {
    width:  "400px",
    height: "400px",
    margin: "auto"
  }
  
  const gtdivinner  = {
    width: "100%",
    height: "90%",
    "border-left": "2px solid",
    "margin-bottom": "115px",
    "border-bottom": "2px solid"
  }
  
  const rbddiv  = {
    width: "300px",
    height: "280px",
    position: "relative",
    top: "80px",
    "border-top": "2px dashed red",
    "border-right": "2px dashed red"
  }
  
  const ppad  = {
        padding: "30px"
  }
  
  const gtddiv1  = {
    width: "55%",
    height: "30%",
    position: "relative",
    top: "-32px",
    "border-top": "2px dashed green",
    "border-right": "2px dashed green"
  }
  
  const gtddiv2  = {
    width: "150px",
    height: "55%",
    position: "relative",
    top: "-232px",
    "border-top": "2px dashed green",
    "border-right": "2px dashed green"
  }

  @connect(
    state => ({
      routes: state.routes
    }),
    dispatch => ({
      actions: bindActionCreators(RouteAction, dispatch)
    })
  )
export default class InfoGraphView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.document = null;
  }

  exportPDF() {
        html2canvas(this.document).then(function(canvas){
            var img=canvas.toDataURL("image/png");
            var doc = new jsPDF();
            doc.addImage(img,'JPEG',40,40);
            doc.save('report.pdf');     
        });
  }

  render() {
    const { actions, routes } = this.props;
    return (
        <div>
      <div ref={(r) => this.document = r}>
          <p style={ppad}>
          Thank you for your time earlier. Based on our discussion about your business, we believe you face a trade off
between two different priorities. On the one hand you are looking for a high level of quality / reward / return. On<br/>
the other hand you also want a high level of quantity / low level of investment / low level of work.
Because these are competing values, your challenge is to choose a balance between them.<br/>
Our product / service can assist you and maximize both sides by increasing your effectiveness as a business,
therefore allowing you to increase your resources to obtain both priorities to a high level.
          </p>
          <div style={ctdiv}>
              <div><h3>TradOff Chart</h3></div>
              <div style={topdiv}></div>
              <div style={bottomdiv}></div>
          </div>
          <div style={gtdiv}>
            <div style={gtdivinner}>
                <div style={rbddiv}></div>
                <div style={gtddiv1}></div>
                <div style={gtddiv2}></div>
            </div>
          </div>
      </div>
        <div>
          <button style={subbutton} onClick={() => this.exportPDF()}>Export PDF</button>
          <button onClick={() => actions.gotoHome()}>Back</button>
        </div>
        </div>
    );
  }
}

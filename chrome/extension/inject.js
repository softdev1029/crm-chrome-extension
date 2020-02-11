import React, { Component } from 'react';
import { render } from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import { ArrowForwardIos } from '@material-ui/icons';
import Dock from 'my-react-dock';
import styles from './inject.scss';

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    let moreButtonClass = styles.moreButtonSellify;

    if (this.state.isVisible) {
      moreButtonClass += ` ${styles.active}`;
    }
    return (
      <div>
        <button onClick={this.buttonOnClick} className={moreButtonClass}>
          <img src={chrome.extension.getURL('img/dollar-icon.png')} alt="more" className={styles.exMore} />
        </button>
        <Dock
          position="right"
          dimMode="none"
          isVisible={this.state.isVisible}
          defaultSize={0.3}
          isControlled={false}
        >
          <header>
            <div className={styles.headerDiv}>
              <img src={chrome.runtime.getURL('img/icon-sellify-logo.png')} alt="sellify" className={styles.img} />
              <div className={styles.headerGoOut} onClick={this.buttonOnClick}>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  size="small"
                  style={{ color: '#007a8c' }}
                  title="Close the panel"
                >
                  <ArrowForwardIos />
                </IconButton>
              </div>
            </div>
          </header>
          <iframe
            style={{
              width: '100%',
              height: '3000px'
            }}
            frameBorder={0}
            allowTransparency="true"
            src={chrome.extension.getURL(`sidebar.html?protocol=${location.protocol}`)}
          />
        </Dock>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});

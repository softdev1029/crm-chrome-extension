import React, { Component } from 'react';
import { render } from 'react-dom';
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
    const moreImgPath = chrome.extension.getURL('img/dollar-icon.png');
    let moreButtonClass = styles.moreButtonSellify;

    if (this.state.isVisible) {
      moreButtonClass += ` ${styles.active}`;
    }
    return (
      <div>
        <button onClick={this.buttonOnClick} className={moreButtonClass}>
          <img src={moreImgPath} alt="more" className={styles.exMore} />
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
              <div className={styles.headerCredit} onClick={this.buttonOnClick}>
                <img src={chrome.runtime.getURL('img/close.svg')} alt="sellify" className={styles.imgClose} />
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

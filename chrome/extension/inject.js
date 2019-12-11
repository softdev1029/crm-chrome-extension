import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';
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
    const moreImgPath = chrome.extension.getURL('img/more.png');
    const dockStyle = { right: '20px', top: '20px', height: '70%', maxWidth: 'calc(40% - 20px)' };

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
          dimMode="transparent"
          isVisible={this.state.isVisible}
          defaultSize={0.4}
          dockStyle={dockStyle}
          fluid="false"
          isControlled={false}
        >
          <iframe
            style={{
              width: '100%',
              height: 'calc(100% - 5px)',
            }}
            frameBorder={0}
            allowTransparency="true"
            src={chrome.extension.getURL(`inject.html?protocol=${location.protocol}`)}
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

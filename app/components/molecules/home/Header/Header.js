import React, { PropTypes, Component } from 'react';
import style from './Header.scss';

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header>
        <div className={style.headerDiv}>
          <img src={chrome.runtime.getURL('img/icon-sellify-logo.png')} alt="sellify" className={style.img} />
        </div>
      </header>
    );
  }
}

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
        <img src={chrome.runtime.getURL('img/icon-sellify-logo.png')} alt="sellify" className={style.img} />
        <div className={style.credit_box} >
          <h2 className={style.credit_num} >340</h2>
          <h2 className={style.credit_num_suffix} >CREDITS</h2>
          <button className={style.credit_add} >ADD CREDITS</button>
        </div>
      </header>
    );
  }
}

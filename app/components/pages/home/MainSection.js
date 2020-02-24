import React, { Component, PropTypes } from 'react';
import { Button, Avatar, InputBase } from '@material-ui/core';

import MainItem from '../../molecules/home/MainItem/MainItem';
import TradeOffPane from '../../molecules/home/TradeOffPane/TradeOffPane';
import style from './MainSection.css';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <div className={style.credit_box}>
          <h2 className={style.credit_num_suffix_bold}>Doron Luder</h2>
          <h2 className={style.credit_num_suffix}>Credits: 100</h2>
          <InputBase
            style={{ textAlign: 'center' }}
            inputProps={{ 'aria-label': 'naked' }}
            placeholder="User name"
            value="Doron Luder"
          />
          <Button variant="outlined" size="small" onClick={() => window.open('http://45.32.20.38:3000', '_blank')} style={{ textTransform: 'none', color: '#00b050', backgroundColor: '#eaf0f6', borderColor: '#00b050' }}>
            Add credits
          </Button>
          <h2 className={style.credit_num_suffix_bold} >doronluder@sellify.com</h2>
          <div>
            <div style={{ marginLeft: 'auto', marginRight: '10px', width: '60px', height: '60px', display: 'inline-block', position: 'relative' }}>
              <Avatar alt="Your face" src={chrome.runtime.getURL('img/user.jpg')} style={{ width: '100%', height: '100%', marginTop: '-10px', position: 'absolute' }} />
              <input
                type="file"
                style={{ opacity: '0', width: '100%', height: '100%', marginTop: '-10px', left: '0px', position: 'absolute' }}
              />
            </div>
            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '80px', height: '80px', display: 'inline-block', position: 'relative' }}>
              <Avatar alt="Company logo" variant="square" src={chrome.extension.getURL('img/company.jpg')} style={{ width: '100%', height: '100%' }} />
              <input
                type="file"
                style={{ opacity: '0', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px' }}
              />
            </div>
          </div>
          <h2 className={style.credit_num_suffix} >Company: Sellify</h2>
        </div>
        <section className={style.main}>
          <ul className={style.todoList}>
            {todos.map((todo) => {
              if (todo.id !== 2) {
                return (<MainItem key={todo.id} todo={todo} {...actions} />);
              }

              return (<TradeOffPane key={todo.id} todo={todo} {...actions} />);
            })}
          </ul>
        </section>
      </div>
    );
  }
}

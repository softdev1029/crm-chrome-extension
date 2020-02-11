import React, { Component, PropTypes } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

import MainItem from '../../molecules/home/MainItem/MainItem';
import TradeOffPane from '../../molecules/home/TradeOffPane/TradeOffPane';
import style from './MainSection.css';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      seeMore: false
    };
  }

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };

  seeMore = () => {
    event.preventDefault();
    this.setState({ seeMore: true });
  }

  seeLess = () => {
    event.preventDefault();
    this.setState({ seeMore: false });
  }

  render() {
    const { todos, actions } = this.props;
    const { seeMore } = this.state;

    let more = style.showMore;
    let rest = style.hideMore;
    if (seeMore === true) {
      more = style.hideMore;
      rest = style.showMore;
    }

    return (
      <div>
        <div className={style.credit_box}>
          <h2 className={style.credit_num_suffix_bold}>Doron Luder</h2>
          <h2 className={style.credit_num_suffix}>Credits: 100</h2>
          <Button variant="outlined" size="small" onClick={() => window.open('http://45.32.20.38:3000', '_blank')} style={{ textTransform: 'none', color: '#007a8c', backgroundColor: '#eaf0f6', borderColor: '#007a8c' }}>
            Add credits
          </Button>
          <Link href="#" size="small" onClick={this.seeMore} className={more} style={{ color: '#007a8c', marginTop: '5px', fontSize: '12px', display: 'block', marginBottom: '5px' }}>
            See more
          </Link>
          <h2 className={[style.credit_num_suffix_bold, rest].join(' ')} >dronluder@sellify.com</h2>
          <Avatar alt="Your face" src={chrome.runtime.getURL('img/user.jpg')} className={rest} style={{ marginLeft: 'auto', marginRight: 'auto', width: '60px', height: '60px' }} />
          <h2 className={[style.credit_num_suffix, rest].join(' ')} >Company: Sellify</h2>
          <h2 className={[style.credit_num_suffix, rest].join(' ')} >Company logo</h2>
          <Avatar alt="Company logo" variant="square" src={chrome.extension.getURL('img/company.jpg')} className={rest} style={{ marginLeft: 'auto', marginRight: 'auto', width: '80px', height: '80px' }} />
          <Button variant="outlined" size="small" onClick={() => window.open('http://45.32.20.38:3000', '_blank')} className={rest} style={{ textTransform: 'none', color: '#007a8c', backgroundColor: '#eaf0f6', borderColor: '#007a8c', marginTop: '10px', marginRight: '5px' }}>
            Edit
          </Button>
          <Button variant="outlined" size="small" className={rest} style={{ textTransform: 'none', color: '#007a8c', backgroundColor: '#eaf0f6', borderColor: '#007a8c', marginTop: '10px', marginLeft: '5px' }}>
            Log out
          </Button>
          <Link href="#" size="small" onClick={this.seeLess} className={rest} style={{ color: '#007a8c', marginTop: '5px', fontSize: '12px', display: 'block' }}>
            See less
          </Link>
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

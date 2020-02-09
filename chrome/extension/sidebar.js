import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../app/containers/Sidebar';
import './todoapp.css';

chrome.storage.local.get('state', (obj) => {
  const { state } = obj;
  const initialState = JSON.parse(state || '{}');

  const createStore = require('../../app/store/configureStore');

  ReactDOM.render(
    <Sidebar store={createStore(initialState)} />,
    document.querySelector('#root')
  );
});

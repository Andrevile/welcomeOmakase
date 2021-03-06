import React from 'react';
import ReactDOM from 'react-dom';

import { checkSignIn } from 'redux/actions/user';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/stores';

import 'antd/dist/antd.min.css';
import 'static/styles/reset.scss';
import './index.css';

function loadUser() {
  const userState = JSON.parse(localStorage.getItem('omakase_user'));

  if (userState) {
    store.dispatch(checkSignIn(userState)).then(({ type }) => {
      if (type === 'USER/CHECK/rejected') {
        localStorage.removeItem('omakase_user');
      }
    });
  }
}

loadUser();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

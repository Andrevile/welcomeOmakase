import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import userSlice from 'redux/reducers/userSlice';
import NavBar from 'components/NavBar';

import NotFound from 'pages/NotFound';

import Modal from 'components/Common/Modal';

import Main from 'pages/Main';
import Dining from 'pages/Dining';
import Share from 'pages/Share';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';

import './App.css';
function App() {
  const [modalOff, modalOn] = useState(false);
  const [cookies, removeCookie] = useCookies(['user']);
  const [hasCookie, setHasCookie] = useState(false);
  const appRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.user && cookies.user !== 'undefined') {
      setHasCookie(true);
      // let alreadyLogIn = { id: cookies.id, user: cookies.user };
      console.log(cookies);
      // dispatch(userSlice.actions.logIn({ _id: cookies.user.id, user_ID: cookies.user.user }));
    } else {
      setHasCookie(false);
      console.log('없어짐');
      // dispatch(userSlice.actions.logOut());
    }
  }, [cookies]);

  useEffect(() => {
    if (modalOff) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOff]);
  return (
    <div className='App' ref={appRef}>
      {modalOff ? <Modal modalOn={modalOn}></Modal> : null}
      <NavBar hasCookie={hasCookie} removeCookie={removeCookie} setHasCookie={setHasCookie} modalOn={modalOn}></NavBar>

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/dining' element={<Dining />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn setHasCookie={setHasCookie} />}></Route>
        <Route path='/share' element={<Share />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default withCookies(App);

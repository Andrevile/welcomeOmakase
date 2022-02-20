import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import NavBar from 'components/NavBar';

import NotFound from 'pages/NotFound';

import Modal from 'components/Modal';

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

  useEffect(() => {
    if (cookies.user && cookies.user !== 'undefined') {
      setHasCookie(true);
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
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/dining' element={<Dining></Dining>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn setHasCookie={setHasCookie}></SignIn>}></Route>
        <Route path='/share' element={<Share></Share>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default withCookies(App);

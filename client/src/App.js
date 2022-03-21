import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

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
  const appRef = useRef();

  // useEffect(() => {
  //   const userState = JSON.parse(localStorage.getItem('omakase_user'));
  //   console.log(userState);
  //   if (userState) {
  //     dispatch(checkSignIn(userState)).then(({ type }) => {
  //       if (type === 'USER/CHECK/rejected') {
  //         localStorage.removeItem('omakase_user');
  //       }
  //     });
  //   }
  // }, []);
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
      <NavBar modalOn={modalOn}></NavBar>

      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/dining' element={<Dining />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/share' element={<Share />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

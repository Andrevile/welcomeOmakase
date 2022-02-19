import React, { useState, useRef, useEffect } from 'react';
import { Axios } from 'utils/axiosmodule';
import { useNavigate } from 'react-router-dom';
const SignIn = ({ setHasCookie }) => {
  const [Warning, setWarning] = useState('');
  let navigate = useNavigate();
  const signInform = useRef();
  async function signInSubmit(e) {
    e.preventDefault();
    setWarning('');
    const signInform = {
      ID: this.id.value,
      PW: this.pw.value,
    };
    let res = await Axios('/api/users/signin', 'POST', signInform);
    if (res.token) {
      setHasCookie(true);
      navigate('/');
    } else {
      setWarning(res.message);
    }
  }
  useEffect(() => {
    signInform.current.addEventListener('submit', signInSubmit);

    return () => {
      if (signInform.current) {
        signInform.current.removeEventListner('submit', signInSubmit);
      }
    };
  }, []);
  return (
    <div className='signin-container'>
      <div className='auth-logo'>
        <p>이랏샤이</p>
        <p>오마카세</p>
      </div>
      <div className='auth-description'>
        <p>아이디와 비밀번호를 입력해주세요.</p>
      </div>

      <div className='signin-form-container'>
        <div className='signin-form'>
          <form ref={signInform}>
            <div className='signData'>
              <div className='signIn-border'>
                <i className='fa-solid fa-user'></i>
                <input
                  name='id'
                  type='text'
                  id='signIn-ID'
                  required
                  autoFocus
                  placeholder='아이디를 입력하세요.'
                  autoComplete='off'
                ></input>
              </div>
              <div className='signIn-border'>
                <i className='fa-solid fa-key'></i>
                <input
                  name='pw'
                  type='password'
                  id='signIn-PW'
                  required
                  placeholder='비밀번호를 입력하세요.'
                  autoComplete='off'
                ></input>
              </div>
            </div>

            <button className='signIn-btn'>로그인</button>
          </form>
        </div>
      </div>
      {Warning.length === 0 ? null : (
        <div className='signIn-warning'>
          <p>{Warning}</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;

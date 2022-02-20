import React, { useState, useEffect } from 'react';
import { Axios } from 'utils/axiosmodule';
import { useNavigate } from 'react-router-dom';
import InputBox from 'components/Auth/InputBox';
import SignLogo from 'components/Auth/SignLogo';
import useFormData from 'hooks/useFormData';
const SignIn = ({ setHasCookie }) => {
  const { values, changeHandler } = useFormData({
    initialValues: { user_ID: '', user_PW: '' },
  });
  const [Warning, setWarning] = useState('');
  let navigate = useNavigate();

  const dataSubmit = async (e) => {
    e.preventDefault();
    setWarning('');

    let res = await Axios('/api/users/signin', 'POST', values);
    console.log(res);
    if (res.token) {
      setHasCookie(true);
      navigate('/');
    } else {
      setWarning(res.message);
    }
  };

  return (
    <div className='signin-container'>
      <SignLogo text={'아이디와 비밀번호를 입력해주세요.'}></SignLogo>

      <div className='signin-form-container'>
        <div className='signin-form'>
          <form onSubmit={dataSubmit}>
            <div className='signData'>
              <div className='signIn-border'>
                <i className='fa-solid fa-user'></i>
                <InputBox
                  props={{
                    name: 'user_ID',
                    type: 'text',
                    id: 'signIn-Id',
                    placeholder: '아이디를 입력하세요.',
                    required: true,
                    autoFocus: true,
                    autoComplete: 'off',
                  }}
                  changeHandler={changeHandler}
                ></InputBox>
              </div>
              <div className='signIn-border'>
                <i className='fa-solid fa-key'></i>
                <InputBox
                  props={{
                    name: 'user_PW',
                    type: 'password',
                    id: 'signIn-PW',
                    required: true,
                    placeholder: '비밀번호를 입력하세요.',
                    autoComplete: 'off',
                  }}
                  changeHandler={changeHandler}
                ></InputBox>
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

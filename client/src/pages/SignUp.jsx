import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from 'utils/api';
import InputBox from 'components/Auth/InputBox';
import useFormData from 'hooks/useFormData';
import SignLogo from 'components/Auth/SignLogo';
const SignUp = () => {
  const { values, changeHandler } = useFormData({
    initialValues: { user_ID: '', email: '', user_PW: '', user_PW_compare: '', auth: 'user' },
  });
  const [Warning, setWarning] = useState('');
  let navigate = useNavigate();

  const dataSubmit = async (e) => {
    e.preventDefault();
    setWarning('');
    if (values.user_PW !== values.user_PW_compare) {
      setWarning('비밀번호가 일치하지 않습니다.');
    } else {
      let res = await api.post('/user/signup', values);
      console.log(res);
      if (res.status === 200) {
        alert(res.message);
        navigate('/signin');
      } else {
        setWarning(res.message);
      }
    }
  };

  return (
    <div className='signUp-container'>
      <SignLogo text={'회원가입 양식을 작성해주세요.'}></SignLogo>

      <div className='signUp-form-container'>
        <form className='signUp-form' onSubmit={dataSubmit}>
          <div className='formData'>
            <label htmlFor='signUp-Id'>아이디 (6자이상 영문,숫자만 가능) </label>
            <InputBox
              props={{
                name: 'user_ID',
                type: 'text',
                id: 'signUp-Id',
                placeholder: '아이디를 입력하세요.',
                required: true,
                autoFocus: true,
                pattern: '[a-zA-Z0-9]{6,}$',
                autoComplete: 'off',
              }}
              changeHandler={changeHandler}
            ></InputBox>
          </div>
          <div className='formData'>
            <label htmlFor='signUp-email'>이메일 </label>
            <InputBox
              className='formData'
              props={{
                name: 'email',
                type: 'email',
                id: 'signUp-email',
                placeholder: '이메일을 입력하세요.',
                required: true,
                autoComplete: 'off',
              }}
              changeHandler={changeHandler}
            ></InputBox>
          </div>
          <div className='formData'>
            <label htmlFor='signUp-PW'>비밀번호 (7자 이상) </label>
            <InputBox
              className='formData'
              props={{
                name: 'user_PW',
                type: 'password',
                id: 'signUp-PW',
                placeholder: '비밀번호를 입력하세요.',
                required: true,
                autoComplete: 'off',
                minLength: 7,
              }}
              changeHandler={changeHandler}
            ></InputBox>
          </div>
          <div className='formData'>
            <label htmlFor='signUp-PW-compare'>비밀번호 재확인 </label>
            <InputBox
              className='formData'
              props={{
                name: 'user_PW_compare',
                type: 'password',
                id: 'signUp-PW-compare',
                placeholder: '비밀번호를 다시 입력하세요.',
                required: true,
                autoComplete: 'off',
              }}
              changeHandler={changeHandler}
            ></InputBox>
          </div>

          <div className='formSubmit'>
            <button>가입하기</button>
          </div>
        </form>
      </div>
      {Warning.length === 0 ? null : (
        <div className='signUp-warning'>
          <p>{Warning}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;

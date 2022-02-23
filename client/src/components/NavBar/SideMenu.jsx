import { Link, useNavigate } from 'react-router-dom';

function SideMenu({ hasCookie, removeCookie, setHasCookie }) {
  let navigate = useNavigate();

  const onClickHandler = () => {
    setHasCookie(false);
    removeCookie('user');
    navigate('/');
  };

  return (
    <>
      <ul className='side-menu'>
        {!hasCookie ? (
          <>
            {' '}
            <li className='menu-item SignIn-btn'>
              <Link to='/signin'>로그인</Link>
            </li>
            <li className='menu-item SignUp-btn'>
              <Link to='/signup'>회원가입</Link>
            </li>
          </>
        ) : (
          <li className='menu-item'>
            <button className='SignOut-btn' onClick={onClickHandler}>
              로그 아웃
            </button>
          </li>
        )}
      </ul>
    </>
  );
}

export default SideMenu;

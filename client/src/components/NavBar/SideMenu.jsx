import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/actions/user';

function SideMenu() {
  const { isLoggedIn } = useSelector((state) => state.user);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    navigate('/');
    dispatch(logOut()).then(({ type }) => {
      // if (type !== 'USER/LOG_OUT/rejected') {
      //   navigate('/');
      // }
    });
  };

  return (
    <>
      <ul className='side-menu'>
        {!isLoggedIn ? (
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

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/actions/user';
function SmSideMenu() {
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
    <div className='sm-device'>
      {!isLoggedIn ? (
        <>
          <Link to='/signin' className='signIn-icon' title='로그인'>
            <i className='fa-solid fa-right-to-bracket'></i>
          </Link>
          <Link to='/signup' className='signUp-icon' title='회원가입'>
            <i className='fa-solid fa-user-plus'></i>
          </Link>
        </>
      ) : (
        <button className='signOut-icon' onClick={onClickHandler}>
          <i className='fa-solid fa-power-off'></i>
        </button>
      )}
    </div>
  );
}
export default SmSideMenu;

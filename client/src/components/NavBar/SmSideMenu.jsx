import { Link, useNavigate } from 'react-router-dom';
function SmSideMenu({ hasCookie, removeCookie, setHasCookie }) {
  let navigate = useNavigate();

  const onClickHandler = () => {
    setHasCookie(false);
    removeCookie('user');
    navigate('/');
  };

  return (
    <div className='sm-device'>
      {!hasCookie ? (
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

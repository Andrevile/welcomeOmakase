import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuItem from './MenuItem';
import SideMenu from './SideMenu';
import SmSideMenu from './SmSideMenu';

function NavBar({ hasCookie, removeCookie, setHasCookie, modalOn }) {
  return (
    <div className='section'>
      <div className='inner'>
        <div className='menu-group'>
          <div className='title'>
            <Link
              to='/'
              style={{
                color: 'black',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              <p>이랏샤이</p>
              <p>오마카세</p>
            </Link>
          </div>
          <ul className='main-menu toggle'>
            <MenuItem path='/' text='소개' />
            <MenuItem path='/dining' text='맛집' />
            <MenuItem path='/share' text='글 목록' />
            {/* <li className='menu-item'>
              <NavLink
                to='/share'
                className='link'
                onClick={
                  hasCookie
                    ? null
                    : (e) => {
                        e.preventDefault();
                        modalOn(true);
                      }
                }
              >
                글 목록
              </NavLink>
            </li> */}
          </ul>

          <SmSideMenu hasCookie={hasCookie} removeCookie={removeCookie} setHasCookie={setHasCookie} />
          <SideMenu hasCookie={hasCookie} removeCookie={removeCookie} setHasCookie={setHasCookie} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

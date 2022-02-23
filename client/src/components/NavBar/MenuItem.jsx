import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ path, text }) {
  return (
    <>
      <li className='menu-item'>
        <NavLink to={path} className='link'>
          {text}
        </NavLink>
      </li>
    </>
  );
}

export default MenuItem;

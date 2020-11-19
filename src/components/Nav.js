import React from 'react';
import logo from '../assets/logo.svg';
function Nav() {
  return (
    <nav>
      <img className='logo' src={logo} alt='logo' />
      <div className='nav__cta'>
        <ul>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

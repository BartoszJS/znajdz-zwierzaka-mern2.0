import React from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Header.js';
import { useAppContext } from '../context/appContext.js';
import {
  FaUserCircle,
  FaCaretDown,
  FaPlusCircle,
  FaSearch,
  FaSignOutAlt,
} from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser, toggleProfile, showToggleProfile } =
    useAppContext();

  const logoutButton = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <Wrapper>
      <div className='header'>
        <div className='cont'>
          <ul>
            <li className='logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </li>
            <div className='navbars'>
              <li>
                <Link className='place' to='/dodaj-zwierze'>
                  <FaPlusCircle /> DODAJ
                </Link>
              </li>
              <li>
                <Link className='place' to='/wszystkie-zwierzaki'>
                  <FaSearch /> ZAGINIONE
                </Link>
              </li>
              {user ? (
                <li>
                  <div className='btn-container'>
                    <div className='btn' type='button'>
                      <Link className='profile_button' to='/profile'>
                        <FaUserCircle />
                        {user.name}
                      </Link>
                      <button
                        className='btn'
                        type='button'
                        onClick={showToggleProfile}
                      >
                        <FaCaretDown />
                      </button>
                    </div>
                    <div
                      className={
                        toggleProfile ? 'dropdown show-dropdown' : 'dropdown'
                      }
                    >
                      <button
                        type='button'
                        className='dropdown-btn'
                        onClick={logoutButton}
                      >
                        <FaSignOutAlt />
                        Wyloguj
                      </button>
                    </div>
                  </div>
                </li>
              ) : (
                <li>
                  <Link className='place' to='/register'>
                    <RiLoginCircleFill /> LOGOWANIE
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../assets/wrappers/Header.js";
import { useAppContext } from "../context/appContext.js";
import {
  FaUserCircle,
  FaCaretDown,
  FaPlusCircle,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "+110%" },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logoutUser, toggleProfile, showToggleProfile } =
    useAppContext();

  const logoutButton = () => {
    logoutUser();
    navigate("/");
  };
  useEffect(() => {
    setIsOpen(false);
  }, [window.location.href]);

  return (
    <Wrapper>
      <div className='header'>
        <div className='cont'>
          <div className='logo'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='content'>
            <div className='navbars'>
              <Link className='place' to='/dodaj-zwierze'>
                <FaPlusCircle /> DODAJ
              </Link>

              <Link className='place' to='/wszystkie-zwierzaki'>
                <FaSearch /> ZAGINIONE
              </Link>

              {user ? (
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
                      toggleProfile ? "dropdown show-dropdown" : "dropdown"
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
              ) : (
                <Link className='place' to='/register'>
                  <RiLoginCircleFill /> LOGOWANIE
                </Link>
              )}
            </div>
          </div>
          <div className='hamburger'>
            <GiHamburgerMenu
              className='hamicon'
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          {isOpen && (
            <div>
              <div className='hamdiv'>
                <Link className='hamplace' to='/dodaj-zwierze'>
                  <FaPlusCircle /> DODAJ
                </Link>
              </div>
              <div className='hamdiv'>
                <Link className='hamplace' to='/wszystkie-zwierzaki'>
                  <FaSearch /> ZAGINIONE
                </Link>
              </div>

              {user ? (
                <div>
                  <div className='hamdiv'>
                    <Link className='hamplace' to='/profile'>
                      <FaUserCircle /> {user.name}
                    </Link>
                  </div>
                  <div className='hamdiv' onClick={logoutButton}>
                    <Link className='hamplace' to='/'>
                      <FaSignOutAlt /> Wyloguj
                    </Link>
                  </div>
                </div>
              ) : (
                <div className='hamdiv'>
                  <Link className='hamplace' to='/register'>
                    <RiLoginCircleFill /> LOGOWANIE
                  </Link>
                </div>
              )}
            </div>
          )}
        </motion.nav>
      </div>
    </Wrapper>
  );
};

export default Header;

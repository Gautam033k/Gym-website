import React, { useState } from 'react';
import './navbar.css';
import GYMLOGO from '../../assets/gymlogo.png';

const Navbar = () => {
  const [burger_class, setburger_class] = useState('burger-bar unclicked');
  const [menu_class, setmenu_class] = useState('nav__items hidden');
  const [isMenuClicked, setisMenuClicked] = useState(false);

  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 650) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setburger_class('burger-bar clicked');
      setmenu_class('nav__items visible');
    } else {
      setburger_class('burger-bar unclicked');
      setmenu_class('nav__items hidden');
    }
    setisMenuClicked(!isMenuClicked);
  };

  return (
    <nav>
      <div className={nav ? 'container navactive' : 'container nav__container'}>
        <a href="index.html" className="nav__logo">
          <h3>Body+</h3>
          <img src={GYMLOGO} alt="gymlogo" />
        </a>
        <ul className={menu_class}>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html#about">About</a>
          </li>
          <li>
            <a href="index.html#plans">plans</a>
          </li>
          <li>
            <a href="index.html#testimonials">testimonials</a>
          </li>
          <li>
            <a href="index.html#footer">Contact</a>
          </li>
        </ul>

        {/* <div className="nav__signin-signup">
          <a href="/">Login</a>
          <a href="/" className="btn">
            Signup
          </a>
        </div> */}

        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../routes/routes';
import logo from '../assets/shared/logo.svg';
import burger from '../assets/shared/icon-hamburger.svg';
import closed from '../assets/shared/icon-close.svg';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleBurderMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleClose = () => {
    setMenu(false);
  };

  const items = [
    {
      title: 'Home',
      href: PAGES.MAIN,
    },
    {
      title: 'Destination',
      href: PAGES.DESTINATION,
    },
    {
      title: 'Crew',
      href: PAGES.CREW,
    },
    {
      title: 'Technology',
      href: PAGES.TECHNOLOGY,
    },
  ];

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="nav__list-logo">
          <NavLink className="nav__list-logo--item" to="/">
            <img className="logo__img" src={logo} alt="" />
          </NavLink>
        </ul>
        <div className="header__line"></div>
        <ul className="nav__list">
          {items.map((item, index) => (
            <li className="nav__list-item" key={`${index}__${item.title}`}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav__list-item checked' : 'nav__list-item'
                }
                to={item.href}>
                <span className="nav__list-item--span">{`0${index}`}</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="header__menu">
          <div onClick={handleBurderMenu}>
            <img src={menu ? closed : burger} alt="burger" className="header__menu-icon" />
          </div>
          {menu && (
            <div className="burger__menu">
              <button className="burger__menu-btn" onClick={handleClose} type="submit">
                x
              </button>
              <ul className="nav__list-burger">
                {items.map((item, index) => (
                  <li className="nav__list-item" key={`mob__${index}__${item.title}`}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'nav__list-item checked' : 'nav__list-item'
                      }
                      onClick={handleClose}
                      to={item.href}>
                      <span className="nav__list-item--span">{`0${index}`}</span>
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

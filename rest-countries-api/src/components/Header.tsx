import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { Btn } from '.';
import { useTheme } from '../context/ThemeContext';
import { PAGES } from '../const';

const Header = () => {
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('#root').classList.remove('light');
      document.querySelector('#root').classList.add('dark');
    } else {
      document.querySelector('#root').classList.remove('dark');
      document.querySelector('#root').classList.add('light');
    }
  }, [theme]);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="nav__list">
          <NavLink className={`${theme === 'dark' ? 'dark' : 'light'} list-item`} to={PAGES.MAIN}>
            Where in the world?
          </NavLink>
          <li className="list-item">
            <Btn
              actionLabel="Theme"
              icon={theme === 'dark' ? MdDarkMode : MdLightMode}
              onClick={changeTheme}
              outline
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

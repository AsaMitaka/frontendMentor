import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { Btn } from '.';
import { PAGES } from '../const';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
      if (theme === 'dark') {
        rootElement.classList.remove('light');
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
        rootElement.classList.add('light');
      }
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

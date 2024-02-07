import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <ul className="nav__list">
        <NavLink className="nav__list-logo" to="/">
          Logo
        </NavLink>
      </ul>
      <ul className="nav__list">
        <NavLink className="nav__list-item" to={'/'}>
          home
        </NavLink>
        <NavLink className="nav__list-item" to={'/destination'}>
          destination
        </NavLink>
        <NavLink className="nav__list-item" to={'/crew'}>
          crew
        </NavLink>
        <NavLink className="nav__list-item" to={'/technology'}>
          technology
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;

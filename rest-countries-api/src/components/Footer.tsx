import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-list--item">
            <a
              className={`footer-link ${theme === 'dark' ? 'footer--dark' : 'footer--light'} `}
              href="https://www.github.com/asaMitaka"
              target="_blank">
              github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

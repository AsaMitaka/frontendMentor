import { useTheme } from '../context/ThemeContext';
import { CountryCardProps } from '../@types';
import useNavigateTo from '../hooks/useNavigateTo';

const CountryItem = ({ country }: { country: CountryCardProps }) => {
  const handleToCountry = useNavigateTo();
  const { theme } = useTheme();

  const { capital, flags, name, population, region } = country;

  return (
    <div
      className={`country ${theme === 'dark' ? 'dark' : 'light'}`}
      onClick={() => handleToCountry(name.common)}>
      <img className="country-img" src={flags.png} alt={flags.alt} />
      <div className="country__block">
        <p className="country__block-title">{name.common}</p>
        <ul className="country__block-list">
          <li className="country__block-list--item">
            Population: <span className="list-item--span">{population}</span>
          </li>
          <li className="country__block-list--item">
            Region: <span className="list-item--span">{region}</span>
          </li>
          <li className="country__block-list--item">
            Capital: <span className="list-item--span">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryItem;

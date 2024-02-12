import { REGIONS } from '../const';
import { useCountry } from '../context/CountryContext';
import { useTheme } from '../context/ThemeContext';

const Select = () => {
  const { theme } = useTheme();
  const { filter, setFilter } = useCountry();

  return (
    <select
      className={`select ${theme === 'dark' ? 'dark' : 'white'}`} // добавляем классы к select
      onChange={(e) => setFilter(e.target.value)}
      value={filter}>
      {REGIONS.map((region) => (
        <option
          key={region.value}
          className={`option ${theme === 'dark' ? 'dark' : 'light'}`} // добавляем классы к option
          value={region.value}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

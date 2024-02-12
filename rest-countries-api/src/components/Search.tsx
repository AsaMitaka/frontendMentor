import { useCountry } from '../context/CountryContext';
import { useTheme } from '../context/ThemeContext';

const Search = () => {
  const { theme } = useTheme();
  const { search, setSearch } = useCountry();

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    setSearch(searchValue);
  };

  return (
    <input
      className={`input ${theme === 'dark' ? 'input-dark' : ''}`}
      onChange={handleSearch}
      placeholder={`search`}
      type="search"
      value={search}
    />
  );
};

export default Search;

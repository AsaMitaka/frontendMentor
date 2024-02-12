import { CountryCardProps } from '../@types';
import { CountryItem, Loading, Search, Select } from '../components';
import { useCountry } from '../context/CountryContext';

const Main = () => {
  const { data, filter, isLoading, search } = useCountry();

  const filteredItems = data.filter((item) => {
    if (filter === '') return item;

    if (filter === item.region) {
      return item;
    }
  });

  const searchedItems = filteredItems.filter((item) =>
    item.name.common.trim().toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return (
    <section className="main">
      <div className="main__heading">
        <Search />
        <Select />
      </div>
      <div className="main__block">
        {data?.length > 0 ? (
          searchedItems.map((country: CountryCardProps) => <CountryItem country={country} />)
        ) : (
          <div>No data available</div>
        )}
      </div>
    </section>
  );
};

export default Main;

import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/';

const instance = axios.create({
  baseURL: URL,
});

const allCountriesFields = 'fields=capital,flags,name,population,region';

const getAllCountries = async () => {
  const data = await instance(`/all?${allCountriesFields}`);

  return data.data;
};

const getCountry = async (name: string) => {
  const data = await instance(`/name/${name}`);

  return data.data[0];
};

const getBorderCountry = async (border: string) => {
  const data = await instance(`/alpha/${border}`);

  return data.data[0].name.common;
};

export { getAllCountries, getBorderCountry, getCountry };

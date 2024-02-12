import { createContext, useContext, useEffect, useReducer } from 'react';
import { getAllCountries } from '../services/api.config';
import { CountryCardProps } from '../@types';

interface CountryContextProps {
  data: [] | CountryCardProps[];
  filter: string;
  isLoading: boolean;
  search: string;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
}

interface InitialStateProps {
  data: [] | CountryCardProps[];
  filter: string;
  isLoading: boolean;
  search: string;
}

const initialState: InitialStateProps = {
  data: [],
  filter: '',
  isLoading: false,
  search: '',
};

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

type Action =
  | { type: 'country/loading' }
  | { type: 'country/fetched'; payload: CountryCardProps[] }
  | { type: 'country/filter'; payload: string }
  | { type: 'country/search'; payload: string };

const reducer = (state: InitialStateProps, action: Action) => {
  switch (action.type) {
    case 'country/loading':
      return { ...state, isLoading: true };
    case 'country/fetched':
      return { ...state, isLoading: false, data: action.payload };
    case 'country/filter':
      return { ...state, filter: action.payload };
    case 'country/search':
      return { ...state, search: action.payload };
    default:
      throw new Error('Invalid action');
  }
};

const CountryProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ data, filter, isLoading, search }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: 'country/loading' });
      try {
        const countries = await getAllCountries();

        dispatch({ type: 'country/fetched', payload: countries });
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const setFilter = (filter: string) => {
    dispatch({ type: 'country/filter', payload: filter });
  };

  const setSearch = (search: string) => {
    dispatch({ type: 'country/search', payload: search });
  };

  return (
    <CountryContext.Provider
      value={{
        data,
        filter,
        isLoading,
        setFilter,
        search,
        setSearch,
      }}>
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => {
  const context = useContext(CountryContext);

  if (context === undefined) throw new Error('DataContext used outside of context');

  return context;
};

export { CountryContext, CountryProvider, useCountry };

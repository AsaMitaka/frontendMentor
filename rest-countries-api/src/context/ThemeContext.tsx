import { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext(undefined);

interface InitialStateProps {
  theme: 'light' | 'dark';
}

const initialState: InitialStateProps = {
  theme: 'light',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'theme/light':
      return { ...state, theme: 'light' };
    case 'theme/dark':
      return { ...state, theme: 'dark' };
    default:
      throw new Error('Unknown action type');
  }
};

const ThemeProvider = ({ children }) => {
  const [{ theme }, dispatch] = useReducer(reducer, initialState);

  const changeTheme = () => {
    theme === 'light' ? dispatch({ type: 'theme/dark' }) : dispatch({ type: 'theme/light' });
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error('ThemeContext used outside of context');
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };

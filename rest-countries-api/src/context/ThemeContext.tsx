import { createContext, useContext, useReducer } from 'react';

interface InitialStateProps {
  theme: 'light' | 'dark';
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const initialState: InitialStateProps = {
  theme: 'light',
};

type Action = { type: 'theme/light' } | { type: 'theme/dark' };

const reducer = (state: InitialStateProps, action: Action): InitialStateProps => {
  switch (action.type) {
    case 'theme/light':
      return { ...state, theme: 'light' };
    case 'theme/dark':
      return { ...state, theme: 'dark' };
    default:
      throw new Error('Unknown action type');
  }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ theme }, dispatch] = useReducer(reducer, initialState);

  const changeTheme = () => {
    theme === 'light' ? dispatch({ type: 'theme/dark' }) : dispatch({ type: 'theme/light' });
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };

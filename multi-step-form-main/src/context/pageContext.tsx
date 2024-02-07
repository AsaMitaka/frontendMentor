import { createContext, useContext, useReducer } from 'react';

interface PageProps {
  currentPage: number;
  pagesNumber: number;
}

type PageAction =
  | { type: 'prevPage' }
  | { type: 'nextPage' }
  | { type: 'setCurrentPage'; payload: number }
  | { type: 'setPagesNumber'; payload: number };

type PageProviderProps = {
  children: React.ReactNode;
};

interface PageContextProps {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  pagesNumber: number;
  setCurrentPage: (page: number) => void;
  setPagesNumber: (pageNumber: number) => void;
}

const initialState: PageProps = {
  currentPage: 0,
  pagesNumber: 0,
};

const PageContext = createContext<PageContextProps | undefined>(undefined);

const reducer = (state: PageProps, action: PageAction) => {
  switch (action.type) {
    case 'prevPage':
      return { ...state, currentPage: state.currentPage - 1 };
    case 'nextPage':
      return { ...state, currentPage: state.currentPage + 1 };
    case 'setCurrentPage':
      return { ...state, currentPage: action.payload };
    case 'setPagesNumber':
      return { ...state, pagesNumber: action.payload };
    default:
      throw new Error('Invalid action type');
  }
};

const PageProvider = ({ children }: PageProviderProps) => {
  const [{ currentPage, pagesNumber }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const prevPage = () => {
    if (currentPage === 0) return;
    dispatch({ type: 'prevPage' });
  };

  const nextPage = () => {
    if (currentPage === pagesNumber) return;
    dispatch({ type: 'nextPage' });
  };

  const setCurrentPage = (pageNumber: number) =>
    dispatch({ type: 'setCurrentPage', payload: pageNumber });

  const setPagesNumber = (pageNumber: number) =>
    dispatch({ type: 'setPagesNumber', payload: pageNumber });

  return (
    <PageContext.Provider
      value={{
        currentPage,
        nextPage,
        pagesNumber,
        prevPage,
        setCurrentPage,
        setPagesNumber,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePage = (): PageContextProps => {
  const context = useContext(PageContext);

  if (context === undefined)
    throw new Error('usePage must be used within a PageProvider');

  return context;
};

export { PageContext, PageProvider, usePage };

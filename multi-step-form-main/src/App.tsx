import { Addons, Congrats, Details, Info, Plan, Summary } from './components';
import './App.css';
import { usePage } from './context/pageContext';
import { useEffect } from 'react';

const App = () => {
  const { currentPage, setPagesNumber } = usePage();
  const pages = [Info, Plan, Addons, Summary, Congrats];

  useEffect(() => {
    setPagesNumber(pages.length - 1);
  }, []);

  const PageComponent = pages[currentPage];

  return (
    <div className="wrapper">
      <Details pageNumber={currentPage} />
      <div className="page">
        <PageComponent />
      </div>
    </div>
  );
};

export default App;

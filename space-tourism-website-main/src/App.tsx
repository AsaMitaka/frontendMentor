import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Crew, Destination, Main, Technology } from './pages';
import { Header } from './components';
import { PAGES } from './routes/routes';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PAGES.MAIN} element={<Main />} />
        <Route path={PAGES.CREW} element={<Crew />} />
        <Route path={PAGES.DESTINATION} element={<Destination />} />
        <Route path={PAGES.TECHNOLOGY} element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;

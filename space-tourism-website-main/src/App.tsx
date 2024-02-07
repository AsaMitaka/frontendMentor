import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Crew, Destination, Main, Technology } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;

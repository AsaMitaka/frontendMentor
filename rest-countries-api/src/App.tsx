import { Route, Routes } from 'react-router-dom';
import { FaLongArrowAltUp } from 'react-icons/fa';
import './App.css';

import { Detail, Error, Main } from './pages';
import { Btn, Footer, Header } from './components';
import { PAGES } from './const';
import { useTheme } from './context/ThemeContext';
import { useEffect, useState } from 'react';

const App = () => {
  const { theme } = useTheme();

  const [showScrollToTop, setShowScrollToTop] = useState(false); // Состояние для отображения кнопки "Наверх"

  // Функция обработки прокрутки страницы
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Эффект для добавления прослушивателя событий при монтировании и удалении компонента
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Пустой массив зависимостей означает, что эффект будет запускаться только при монтировании и размонтировании компонента

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Header />
      <Routes>
        <Route path={PAGES.MAIN} element={<Main />} />
        <Route path={PAGES.DETAIL} element={<Detail />} />
        <Route path={PAGES.ERROR} element={<Error />} />
      </Routes>
      <Footer />
      {showScrollToTop && (
        <div className="scroll-to-top">
          <Btn actionLabel="" icon={FaLongArrowAltUp} onClick={scrollToTop} />
        </div>
      )}
    </div>
  );
};

export default App;

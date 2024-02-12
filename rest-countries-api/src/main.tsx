import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { CountryProvider } from './context/CountryContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CountryProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

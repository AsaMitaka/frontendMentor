import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { UserProvider } from './context/userContext.tsx';
import { PageProvider } from './context/pageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </UserProvider>
  </React.StrictMode>,
);

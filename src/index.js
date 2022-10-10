import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
      <App/>
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

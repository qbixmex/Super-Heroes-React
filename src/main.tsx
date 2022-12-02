import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroesApp from './heroes-app';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
);

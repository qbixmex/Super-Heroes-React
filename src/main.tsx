import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import HeroesApp from './heroes-app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { store } from './heroes/store/store';
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <HeroesApp />
  </Provider>,
  // </React.StrictMode>,
);

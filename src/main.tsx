import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './state';
import IndexPage from './pages/Main/Main';

import './assets/css/stylesheet.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexPage />
    </Provider>
  </React.StrictMode>,
)


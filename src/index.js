import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FavoritesContextProvider} from './store/favorites-context';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

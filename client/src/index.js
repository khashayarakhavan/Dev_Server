import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import * as serviceWorker from './serviceWorker';

import './css/compiled/style.compress.css';
// import './css/compiled/style.comp.css';
import './css/compiled/icon-font.css';
// import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

const bookBtn = document.getElementById("book-tour");

if (bookBtn) {
  bookBtn.addEventListener("click", (e) => {
    e.target.textContent = "Processing...";
    /* javascript automatically converts the kebab-cased variables to camelCased variable  */
    /* so here instead of tour-id we use tourId alongwith ES6 destructuring */
    // const { tourId } = e.target.dataset;
    // bookTour(tourId);
  });
}

serviceWorker.register();

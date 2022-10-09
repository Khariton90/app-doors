import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { exterriorDoors, interriorDoors } from './mocks/product-data';
import { store } from './store';
import { loadExterriorDoors, loadInterriorDoors } from './store/actions';
import adapted from './utils/adapted';

const interriorProducts = adapted(interriorDoors);
const exterriorProducts = adapted(exterriorDoors);

store.dispatch(loadInterriorDoors(interriorProducts));
store.dispatch(loadExterriorDoors(exterriorProducts));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

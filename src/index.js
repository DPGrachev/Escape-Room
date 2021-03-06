import { StrictMode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { reducer } from 'store/reducer';
import { createAPI } from 'services/api';
import { fetchQuestsAction } from 'store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

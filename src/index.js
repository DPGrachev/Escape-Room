import { StrictMode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { reducer } from 'store/reducer';

const store = configureStore({
  reducer: reducer,
})

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

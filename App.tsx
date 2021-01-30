import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';
import Home from './app/pages/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

import React from 'react';
import Router from './src/routes/Router';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}

export default App;

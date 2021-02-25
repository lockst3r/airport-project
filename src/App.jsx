import React from 'react';
import Main from './features/flights/components/main/Main';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
    </BrowserRouter>
  );
};

export default App;

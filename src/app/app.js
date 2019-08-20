import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ClientEntry from 'app/root/ClientEntry';
import { configureStore } from 'app_redux/createStore';
import Base from '../app/containers/components/Base';

const store = configureStore();

render (
  <Provider store={store}>
    <Base />
    <ClientEntry />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
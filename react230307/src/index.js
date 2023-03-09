import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from 'reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

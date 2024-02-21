import App from './App.jsx';
import * as React from "react";
import store from './redux/store.js';
import { Provider } from 'react-redux';
import 'swiper/swiper-bundle.css';
import './assets/main.css';
import './theme/assets/styles/style.css';
import './admin/assets/styles/style.css';
import * as ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
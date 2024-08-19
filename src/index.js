import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

registerServiceWorker();

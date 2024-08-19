import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import CardList from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CardList robots={robots}/>
  </React.StrictMode>
);

registerServiceWorker();

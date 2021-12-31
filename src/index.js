import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // i imported tailwind into the css
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

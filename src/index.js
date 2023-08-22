import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
);
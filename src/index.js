import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing React-DatePicker CSS
import "react-datepicker/dist/react-datepicker.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
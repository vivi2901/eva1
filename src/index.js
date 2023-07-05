import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PruebaProvider } from './components/PruebaContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PruebaProvider>
    <App />
    </PruebaProvider>
    
  </React.StrictMode>
);
reportWebVitals();

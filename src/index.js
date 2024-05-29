import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import "./index.css";
import { NextUIProvider } from '@nextui-org/react';
import NavBar from './components/core/structure/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <NavBar />
      <App />
    </NextUIProvider>
  </React.StrictMode>
);





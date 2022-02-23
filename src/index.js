import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/main/App';
import {WeatherContextProvider} from './app/context/context'

ReactDOM.render(
  <WeatherContextProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </WeatherContextProvider>,
  document.getElementById('root')
);


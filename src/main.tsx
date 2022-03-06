import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Globalfonts from './assets/fonts/fonts';
import StylesReset from './utils/stylesReset';

ReactDOM.render(
  <React.StrictMode>
    <Globalfonts/>
    <StylesReset/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    root,
  );
}

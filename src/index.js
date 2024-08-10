// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes'; // Import your routes
import App from './App'; // Your main App component

const BrowserRouter = createBrowserRouter({
  historyMode: 'browser',
});

ReactDOM.render(
  <BrowserRouter>
    <RouterProvider routes={routes}>
      <App />
    </RouterProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

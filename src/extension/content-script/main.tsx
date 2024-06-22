import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentScript from './ContentScript';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContentScript />
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing Context
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <App />
    </Context>
  
);


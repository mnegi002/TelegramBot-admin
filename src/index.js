import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '40634827085-4nqt7moiknqufmlgnil644l8nvpl2v78.apps.googleusercontent.com';
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

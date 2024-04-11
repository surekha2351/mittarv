import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import firebaseConfig from '../firebaseConfig.js'; // Import the Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import './styles/index.scss';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Create root for rendering
const root = createRoot(document.getElementById('root'));

// Render your app using the new root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';  // You are using React 18+ which uses `createRoot`
import './index.css';  // Import your global styles
import App from './App';  // Import your main App component
import reportWebVitals from './reportWebVitals';  // Web Vitals for performance monitoring

// Create a root for React 18 and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));  // Make sure 'root' is present in your HTML
root.render(
  <React.StrictMode>  {/* Optional: Helps highlight potential problems in the app */}
    <App />  {/* The main App component that will render the rest of your app */}
  </React.StrictMode>
);

// Measure and report performance if needed (optional, remove if not needed)
reportWebVitals();
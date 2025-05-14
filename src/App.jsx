import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing';
import Login from './login';
import Home from './Home';
import './App.css';

/**
 * Main App component that sets up routing for the LibroNet application
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import Dashboard from './components/Dashboard';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS file

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

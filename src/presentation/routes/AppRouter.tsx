import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Landing';
import Login from '../pages/Login';
import Dashboard from "../pages/Dashboard";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* The main login page */}
        <Route path="/login" element={<Login initialForm="login" />} />

        {/* The signup page */}
        <Route path="/signup" element={<Login initialForm="signup" />} />

        {/* The forgot password page */}
        <Route path="/forgot-password" element={<Login initialForm="forgotPassword" />} />

        {/* The reset password page */}
        <Route path="/reset-password" element={<Login initialForm="resetPassword" />} />

        {/* The home page */}
        <Route path="/" element={<Home />} />

        {/* The Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;


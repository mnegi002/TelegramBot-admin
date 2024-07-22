import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;

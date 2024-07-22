import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Telegram Bot</h1>
      <button onClick={() => navigate('/admin/login')}>Admin Panel</button>
    </div>
  );
};

export default Home;

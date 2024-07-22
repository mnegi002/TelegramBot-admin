import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const clientId = '40634827085-4nqt7moiknqufmlgnil644l8nvpl2v78.apps.googleusercontent.com';

const AdminLogin = () => {
  const navigate = useNavigate();

  const onSuccess = async (response) => {
    console.log('Login Success:', response);
    try {
      // Fetch settings after successful login
      // await axios.get('/api/admin/settings');
      navigate('/admin/panel');
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const onError = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>Admin Login</h1>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default AdminLogin;
